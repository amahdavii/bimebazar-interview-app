"use client";

import CarSVG from "@/components/icons/CarSVG";
import SectionHeader from "@/components/shared/layout/SectionHeader";
import Button from "@/components/shared/ui/Button";
import TextField from "@/components/shared/ui/TextField";
import { FC } from "react";
import useLogic from "@/containers/insurance-form/useLogic";

const CarOwnerInfo: FC = () => {
  const {
    open,
    register,
    errors,
    isLoading,
    watchedMobile,
    watchedNationalCode,
    handleSubmitWithValidation,
    selectedAddress,
  } = useLogic();

  return (
    <section>
      <SectionHeader title="مشخصات مالک خودرو" icon={<CarSVG />} />
      <div className="py-[1.5rem] px-[1.1875rem]">
        <form onSubmit={handleSubmitWithValidation}>
          <p className="mb-[0.375rem] font-semibold">
            لطفاً اطلاعات شخصی مالک خودرو را وارد کنید:
          </p>

          <div className="space-y-[1.75rem]">
            <TextField
              inputMode="numeric"
              placeholder="کد ملی"
              {...register("nationalCode")}
              error={errors.nationalCode?.message}
            />
            <TextField
              inputMode="numeric"
              placeholder="شماره تلفن همراه"
              {...register("mobile")}
              error={errors.mobile?.message}
            />
          </div>

          <section className="space-y-[0.375rem] mt-[2rem]">
            <h2 className="font-semibold">آدرس جهت درج روی بیمه نامه</h2>
            <p
              className={`text-[0.875rem] ${
                errors.addressId?.message && !selectedAddress?.details
                  ? "text-[var(--input-error)]"
                  : ""
              }`}
            >
              {selectedAddress
                ? selectedAddress.details
                : "لطفاً آدرسی را که می‌خواهید روی بیمه‌نامه درج شود، انتخاب کنید."}{" "}
            </p>

            <div className={selectedAddress ? "invisible" : "visible"}>
              <Button variant="default" fullWidth onClick={() => open()}>
                انتخاب از آدرس‌های من
              </Button>
            </div>
          </section>

          <div className="flex justify-end pt-[1.5rem]">
            <Button
              type="submit"
              variant="secondary"
              loading={isLoading}
              disabled={!watchedNationalCode || !watchedMobile}
            >
              تایید و ادامه
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CarOwnerInfo;
