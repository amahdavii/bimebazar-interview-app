import { useState } from "react";
import { OrderPayload } from "@/types/order";
import { AxiosError } from "axios";
import { orderApi } from "@/services/order";

export const useOrderSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const submit = async (payload: OrderPayload) => {
    try {
      setIsLoading(true);
      setError(null);
      await orderApi.submitCompletion(payload);
    } catch (err) {
      const axiosError = err as AxiosError;

      const message = axiosError.message || "خطایی رخ داده است";

      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return { submit, isLoading, error };
};
