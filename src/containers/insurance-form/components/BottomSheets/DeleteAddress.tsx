"use client";

import { useAddressContext } from "@/context/AddressContext";
import BottomSheet from "@/components/shared/feedback/BottomSheet";
import BottomSheetHeader from "@/components/shared/feedback/BottomSheet/BottomSheetHeader";
import BottomSheetContent from "@/components/shared/feedback/BottomSheet/BottomSheetContent";
import BottomSheetFooter from "@/components/shared/feedback/BottomSheet/BottomSheetFooter";
import Button from "@/components/shared/ui/Button";
import { useModalQuery } from "@/hooks/useModalQuery";

interface Props {
  isOpen: boolean;
  close: () => void;
}

const DeleteAddressModal = ({ isOpen, close }: Props) => {
  const {
    addresses,
    removeAddress,
    setSelectedAddressId,
    selectedAddressForDeletion,
  } = useAddressContext();

  const address = addresses.find((a) => a.id === selectedAddressForDeletion);
  const { open: openAddressModal } = useModalQuery("modal", "select-address");

  const handleDelete = () => {
    if (!selectedAddressForDeletion) return;

    removeAddress(selectedAddressForDeletion);
    setSelectedAddressId(null);

    openAddressModal();
  };

  const handleCancel = () => {
    openAddressModal();
  };

  return (
    <BottomSheet open={isOpen} onClose={close}>
      <BottomSheetHeader title="حذف آدرس" onClose={close} />
      <BottomSheetContent>
        <p className="font-semibold text-[0.875rem] mb-[1rem]">
          آیا از حذف آدرس خود مطمئن هستید؟
        </p>

        {isOpen && address ? (
          <div className="bg-[#F2F2F2] p-[0.5rem] space-y-[0.5rem] mb-[0.5rem]">
            <h2 className="text-[0.875rem]">{address.name}</h2>
            <p className="text-[0.75rem] text-[var(--input-text)]">
              {address.details}
            </p>
          </div>
        ) : null}
      </BottomSheetContent>

      <BottomSheetFooter>
        <Button variant="secondary" fullWidth onClick={handleDelete}>
          تایید
        </Button>
        <Button variant="primary" fullWidth onClick={handleCancel}>
          بازگشت
        </Button>
      </BottomSheetFooter>
    </BottomSheet>
  );
};

export default DeleteAddressModal;
