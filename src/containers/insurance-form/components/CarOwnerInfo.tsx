"use client";

import CarSVG from "@/components/icons/CarSVG";
import SectionHeader from "@/components/shared/layout/SectionHeader";
import Button from "@/components/shared/ui/Button";
import TextField from "@/components/shared/ui/TextField";
import { FC } from "react";

const CarOwnerInfo: FC = () => {
  return (
    <section>
      <SectionHeader title="مشخصات مالک خودرو" icon={<CarSVG />} />
      <div className="py-[1.5rem] px-[1.1875rem]">
        <form>
          <p className="mb-[0.375rem] font-semibold">
            لطفاً اطلاعات شخصی مالک خودرو را وارد کنید:
          </p>

          <div className="space-y-[1.75rem]">
            <TextField inputMode="numeric" placeholder="کد ملی" />
            <TextField inputMode="numeric" placeholder="شماره تلفن همراه" />
          </div>

          <section className="space-y-[0.375rem] mt-[2rem]">
            <h2 className="font-semibold">آدرس جهت درج روی بیمه نامه</h2>

            <p>
              لطفاً آدرسی را که می‌خواهید روی بیمه‌نامه درج شود، انتخاب کنید.
            </p>
            <Button variant="default" fullWidth>
              انتخاب از آدرس‌های من
            </Button>
          </section>

          <div className="flex justify-end pt-[1.5rem]">
            <Button type="submit" variant="secondary">
              تایید و ادامه
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CarOwnerInfo;
