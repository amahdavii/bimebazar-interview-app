import { FC } from "react";

import BottomSheet from "@/components/shared/feedback/BottomSheet";
import BottomSheetContent from "@/components/shared/feedback/BottomSheet/BottomSheetContent";
import BottomSheetFooter from "@/components/shared/feedback/BottomSheet/BottomSheetFooter";
import Button from "@/components/shared/ui/Button";
import { useRouter } from "next/navigation";
import { useOrderSubmit } from "@/services/order/useOrderSubmit";
import { useFormContext } from "@/context/FormContext";

interface Props {
  isOpen: boolean;
  close: () => void;
}

const ErrorModal: FC<Props> = ({ isOpen, close }) => {
  const { back, replace } = useRouter();
  const { submit, isLoading } = useOrderSubmit();
  const { formData } = useFormContext();

  return (
    <BottomSheet open={isOpen} onClose={close}>
      <BottomSheetContent>
        <div className="space-y-[0.625rem] font-[500] text-[0.875rem]">
          <p>متاسفانه در ثبت اطلاعات شما، خطایی رخ داده است.</p>
          <p>مجددا، تلاش کنید.</p>
        </div>
      </BottomSheetContent>
      <BottomSheetFooter>
        <Button
          variant="secondary"
          fullWidth
          loading={isLoading}
          onClick={async () => {
            await submit({
              addressId: formData.addressId,
              nationalId: formData.nationalId,
              phoneNumber: formData.phoneNumber,
            });

            replace("/submission-success");
          }}
        >
          تلاش مجدد
        </Button>
        <Button
          variant="primary"
          fullWidth
          onClick={() => back()}
          disabled={isLoading}
        >
          بازگشت
        </Button>
      </BottomSheetFooter>
    </BottomSheet>
  );
};

export default ErrorModal;
