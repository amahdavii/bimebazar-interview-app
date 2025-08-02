import { FC } from "react";

import BottomSheet from "@/components/shared/feedback/BottomSheet";
import BottomSheetContent from "@/components/shared/feedback/BottomSheet/BottomSheetContent";
import BottomSheetFooter from "@/components/shared/feedback/BottomSheet/BottomSheetFooter";
import Button from "@/components/shared/ui/Button";

interface Props {
  isOpen: boolean;
  close: () => void;
}

const ErrorModal: FC<Props> = ({ isOpen, close }) => {
  return (
    <BottomSheet open={isOpen} onClose={close}>
      <BottomSheetContent>
        <div className="space-y-[0.625rem] font-[500] text-[0.875rem]">
          <p>متاسفانه در ثبت اطلاعات شما، خطایی رخ داده است.</p>
          <p>مجددا، تلاش کنید.</p>
        </div>
      </BottomSheetContent>
      <BottomSheetFooter>
        <Button variant="secondary" fullWidth>
          تلاش مجدد
        </Button>
        <Button variant="primary" fullWidth>
          بازگشت
        </Button>
      </BottomSheetFooter>
    </BottomSheet>
  );
};

export default ErrorModal;
