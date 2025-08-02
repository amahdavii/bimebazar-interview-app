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

const useLogic = () => {
  const { isOpen, open, close } = useModalQuery("modal", "select-address");
  const { submit, isLoading } = useOrderSubmit();
  const { addresses } = useAddressContext();
  const { push } = useRouter();

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

  const onSubmit = (data: FormData) => {
    setFormData((prev) => ({
      ...prev,
      nationalId: data.nationalCode,
      phoneNumber: data.mobile,
    }));

    submit({
      ...formData,
      nationalId: data.nationalCode,
      phoneNumber: data.mobile,
    })
      .then(() => push("/submission-success"))
      .catch((err) => console.log("err", err));
  };

  const watchedNationalCode = watch("nationalCode");
  const watchedMobile = watch("mobile");

  const handleSubmitWithValidation = handleSubmit((data) => {
    onSubmit(data);
  });

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
