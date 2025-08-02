import { useState } from "react";
import { ErrorResponse, OrderPayload } from "@/types/order";
import { AxiosError } from "axios";
import { orderApi } from "@/services/order";
import { useModalQuery } from "@/hooks/useModalQuery";

export const useOrderSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const { open } = useModalQuery("modal", "error");

  const submit = async (payload: OrderPayload) => {
    try {
      setIsLoading(true);
      setError(null);
      await orderApi.submitCompletion(payload);
    } catch (err) {
      const axiosError = err as AxiosError<ErrorResponse>;

      if (axiosError.response) {
        open();
      }

      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { submit, isLoading, error };
};
