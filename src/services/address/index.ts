import http from "@/services/httpService";
import { Address } from "@/types/address";

export const addressApi = {
  getAll: async (): Promise<Address[]> => {
    const res = await http.get<Address[]>("/my-addresses/");
    return res.data;
  },
};
