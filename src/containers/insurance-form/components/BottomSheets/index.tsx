"use client";

import { FC } from "react";
import { useModalQuery } from "@/hooks/useModalQuery";
import AddressSelector from "@/containers/insurance-form/components/BottomSheets/AddressSelector";
import DeleteAddressModal from "@/containers/insurance-form/components/BottomSheets/DeleteAddress";
import ErrorModal from "@/containers/insurance-form/components/BottomSheets/ErrorModal";

const BottomSheetManager: FC = () => {
  const addressModal = useModalQuery("modal", "select-address");
  const deleteModal = useModalQuery("modal", "delete-address");
  const errorModal = useModalQuery("modal", "error");

  return (
    <>
      <AddressSelector
        isOpen={addressModal.isOpen}
        close={addressModal.close}
      />

      <DeleteAddressModal
        isOpen={deleteModal.isOpen}
        close={deleteModal.close}
      />
      
      <ErrorModal isOpen={errorModal.isOpen} close={errorModal.close} />
    </>
  );
};

export default BottomSheetManager;
