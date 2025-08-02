"use client";

import { Address } from "@/types/address";
import { createContext, useContext, useState, ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
}

interface AddressContextType {
  addresses: Address[];
  setAddresses: (list: Address[]) => void;
  removeAddress: (id: string) => void;
  isLoaded: boolean;

  selectedAddressId: string | null;
  setSelectedAddressId: (id: string | null) => void;

  selectedAddressForDeletion: string | null;
  setSelectedAddressForDeletion: (id: string | null) => void;
}

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export const AddressProvider: FC<Props> = ({ children }) => {
  const [addresses, setAddressesState] = useState<Address[]>([]);
  const [selectedAddressId, setSelectedAddressIdState] = useState<
    string | null
  >(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedAddressForDeletion, setSelectedAddressForDeletion] = useState<
    string | null
  >(null);

  const setAddresses = (list: Address[]) => {
    setAddressesState(list);
    setIsLoaded(true);
  };

  const removeAddress = (id: string) => {
    setAddressesState((prev) => prev.filter((item) => item.id !== id));
    if (selectedAddressId === id) {
      setSelectedAddressIdState(null);
    }
  };

  const setSelectedAddressId = (id: string | null) => {
    setSelectedAddressIdState(id);
  };

  return (
    <AddressContext.Provider
      value={{
        addresses,
        setAddresses,
        removeAddress,
        isLoaded,
        selectedAddressId,
        setSelectedAddressId,
        selectedAddressForDeletion,
        setSelectedAddressForDeletion,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error("useAddressContext باید در AddressProvider استفاده شود");
  }
  return context;
};
