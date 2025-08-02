export interface OrderPayload {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
}

export interface ErrorResponse {
  errors?: string[];
}
