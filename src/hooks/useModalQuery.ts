"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

type ExtraParams = Record<string, string | number | boolean | undefined>;

export const useModalQuery = (
  modalKey: string = "modal",
  modalValue: string
) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(searchParams.get(modalKey) === modalValue);
  }, [searchParams, modalKey, modalValue]);

  const open = (extraParams: ExtraParams = {}) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(modalKey, modalValue);

    Object.entries(extraParams).forEach(([key, value]) => {
      if (value !== undefined) {
        params.set(key, String(value));
      }
    });

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const close = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(modalKey);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return { isOpen, open, close };
};
