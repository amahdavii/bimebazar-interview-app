"use client";

import { FC, useEffect } from "react";
import { useAddresses } from "@/services/address/useAddresses";
import BottomSheet from "@/components/shared/feedback/BottomSheet";
import BottomSheetHeader from "@/components/shared/feedback/BottomSheet/BottomSheetHeader";
import BottomSheetContent from "@/components/shared/feedback/BottomSheet/BottomSheetContent";
import BottomSheetFooter from "@/components/shared/feedback/BottomSheet/BottomSheetFooter";
import Button from "@/components/shared/ui/Button";
import AddressItem from "@/components/shared/features/address/AddressItem";
import { useAddressContext } from "@/context/AddressContext";
import { useFormContext } from "@/context/FormContext";

interface Props {
  isOpen: boolean;
  close: () => void;
}

const AddressSelector: FC<Props> = ({ isOpen, close }) => {
  const {
    addresses,
    setAddresses,
    selectedAddressId,
    setSelectedAddressId,
    setSelectedAddressForDeletion,
    isLoaded,
  } = useAddressContext();

  const { formData, setFormData } = useFormContext();
  const { fetchAddresses } = useAddresses();

  useEffect(() => {
    if (isOpen && !isLoaded) {
      fetchAddresses()
        .then(setAddresses)
        .catch((err) => console.error("خطا در دریافت آدرس‌ها:", err));
    }
  }, [isOpen, isLoaded, fetchAddresses, setAddresses]);

  useEffect(() => {
    if (!isOpen && !formData.addressId) {
      setSelectedAddressId(null);
    }
  }, [isOpen, formData.addressId, setSelectedAddressId]);

  const handleRemove = (id: string) => {
    setSelectedAddressForDeletion(id);
  };

  const handleConfirm = () => {
    if (selectedAddressId) {
      setFormData((prev) => ({
        ...prev,
        addressId: selectedAddressId,
      }));
      close();
    } else {
      alert("لطفاً یک آدرس انتخاب کنید.");
    }
  };

  return (
    <BottomSheet open={isOpen} onClose={close}>
      <BottomSheetHeader title="انتخاب آدرس" onClose={close} />
      <BottomSheetContent>
        {addresses.length > 0 ? (
          <ul className="space-y-[1rem]">
            {addresses.map((address) => (
              <AddressItem
                key={address.id}
                id={address.id}
                title={address.name}
                address={address.details}
                selectedId={selectedAddressId}
                onSelect={setSelectedAddressId}
                onRemove={handleRemove}
              />
            ))}
          </ul>
        ) : (
          <p className="text-center text-sm text-gray-500">آدرسی وجود ندارد.</p>
        )}
      </BottomSheetContent>
      <BottomSheetFooter>
        <Button
          variant="secondary"
          fullWidth
          onClick={handleConfirm}
          disabled={!selectedAddressId}
        >
          تایید
        </Button>
      </BottomSheetFooter>
    </BottomSheet>
  );
};

export default AddressSelector;
