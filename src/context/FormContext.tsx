"use client";

import { createContext, FC, ReactNode, useContext, useState } from "react";
import { OrderPayload } from "@/types/order";

interface Props {
  children: ReactNode;
}

interface FormContextType {
  formData: OrderPayload;
  setFormData: React.Dispatch<React.SetStateAction<OrderPayload>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: FC<Props> = ({ children }) => {
  const [formData, setFormData] = useState<OrderPayload>({
    nationalId: "",
    phoneNumber: "",
    addressId: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext باید داخل <FormProvider> استفاده شود");
  }
  return context;
};
