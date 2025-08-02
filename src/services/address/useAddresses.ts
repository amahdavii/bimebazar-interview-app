import { useCallback } from "react";
import { addressApi } from "@/services/address";
import { Address } from "@/types/address";

export const useAddresses = () => {
  const fetchAddresses = useCallback(async (): Promise<Address[]> => {
    try {
      const data = await addressApi.getAll();
      return data;
    } catch (err: unknown) {
      throw err instanceof Error
        ? err
        : new Error("خطای نامشخص در دریافت آدرس‌ها");
    }
  }, []);

  return { fetchAddresses };
};
