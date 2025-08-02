import z from "zod";

import { isValidIranianNationalCode } from "@/utils/isValidNationalCode";
import { isValidIranianPhoneNumber } from "@/utils/isValidPhoneNumber";

export const rowInfos = [
  { id: 1, label: "شرکت بیمه‌گر", value: "پارسیان" },
  { id: 2, label: "برند خودرو", value: "پژو" },
  { id: 3, label: "مدل خودرو", value: "206 تیپ 6" },
];

export const schema = z.object({
  nationalCode: z
    .string()
    .refine(isValidIranianNationalCode, "کدملی وارد شده معتبر نیست."),
  mobile: z
    .string()
    .refine(isValidIranianPhoneNumber, "شماره تلفن همراه معتبر نیست."),
  addressId: z.string().nonempty(),
});

export type FormData = z.infer<typeof schema>;
