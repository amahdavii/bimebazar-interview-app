"use client";

import Image from "next/image";

import VehicleInfo from "@/containers/insurance-result/components/VehicleInfo";
import Button from "@/components/shared/ui/Button";
import { useRouter } from "next/navigation";

const InsuranceResult = () => {
  const { back } = useRouter();
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <div className="flex flex-col justify-center items-center py-[1.5rem] px-[1rem]">
          <Image
            src="/assets/images/validation.svg"
            width={60}
            height={66}
            alt="ثبت موفق اطلاعات"
          />

          <p
            className="mt-[1rem] font-semibold"
            role="status"
            aria-live="polite"
          >
            ثبت اطلاعات شما، با{" "}
            <strong className="text-[var(--color-green)] font-semibold">
              موفقیت
            </strong>{" "}
            انجام شد.
          </p>

          <VehicleInfo />
        </div>

        <div className="flex justify-end py-[1rem] px-[1.125rem] fixed bottom-0 left-0">
          <Button variant="secondary" onClick={() => back()}>
            بازگشت
          </Button>
        </div>
      </main>
    </>
  );
};

export default InsuranceResult;
