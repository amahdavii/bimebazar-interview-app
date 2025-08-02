import { OrderPayload } from "@/types/order";
import http from "@/services/httpService";

export const orderApi = {
  submitCompletion: async (payload: OrderPayload): Promise<void> => {
    await http.post("/order/completion/", payload);
  },
};
