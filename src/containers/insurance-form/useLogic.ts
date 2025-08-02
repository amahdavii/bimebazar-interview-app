"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModalQuery } from "@/hooks/useModalQuery";
import { FormData, schema } from "@/containers/insurance-form/config";
import { useFormContext } from "@/context/FormContext";
import { useRouter } from "next/navigation";
import { useOrderSubmit } from "@/services/order/useOrderSubmit";
import { useAddressContext } from "@/context/AddressContext";
import { useEffect } from "react";
import useToast from "@/hooks/useToast";
import { AxiosError } from "axios";
import { ErrorResponse } from "@/types/order";

const useLogic = () => {
  const { isOpen, open, close } = useModalQuery("modal", "select-address");
  const { submit, isLoading } = useOrderSubmit();
  const { addresses } = useAddressContext();
  const { push } = useRouter();
  const toast = useToast();

  const { formData, setFormData } = useFormContext();

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      nationalCode: formData.nationalId,
      mobile: formData.phoneNumber,
      addressId: formData.addressId,
    },
  });

  useEffect(() => {
    if (formData.addressId) {
      setValue("addressId", formData.addressId, { shouldValidate: true });
    }
  }, [formData.addressId, setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      setFormData((prev) => ({
        ...prev,
        nationalId: data.nationalCode,
        phoneNumber: data.mobile,
      }));

      await submit({
        ...formData,
        nationalId: data.nationalCode,
        phoneNumber: data.mobile,
      });

      push("/submission-success");
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      const errors = axiosError.response?.data?.errors;

      if (Array.isArray(errors)) {
        errors.forEach((errMsg) => toast.error(errMsg));
      } else {
        toast.error("خطایی در ارسال اطلاعات رخ داده است.");
      }
    }
  };

  const watchedNationalCode = watch("nationalCode");
  const watchedMobile = watch("mobile");

  const handleSubmitWithValidation = handleSubmit(onSubmit);

  const selectedAddress = addresses.find(
    (item) => item.id === formData.addressId
  );

  return {
    isOpen,
    open,
    close,
    register,
    handleSubmit,
    getValues,
    errors,
    onSubmit,
    formData,
    watchedNationalCode,
    watchedMobile,
    isValid,
    isLoading,
    handleSubmitWithValidation,
    selectedAddress,
  };
};

export default useLogic;
