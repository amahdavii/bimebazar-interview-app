"use client";

import clsx from "clsx";
import { FC, ReactNode } from "react";
import { buttonStyles, ButtonType, Variant } from "./config";
import SpinnerSVG from "@/components/icons/SpinnerSVG";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  type?: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "default",
  type = "button",
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
}) => {
  const isDisabled = disabled || loading;
  const config = buttonStyles[variant];

  const base =
    "inline-flex items-center justify-center text-[16px] py-[12px] transition-all whitespace-nowrap";
  const gap = loading ? "gap-2" : "";
  const cursor = isDisabled ? "opacity-70" : "cursor-pointer";
  const width = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={clsx(
        base,
        width,
        config.base,
        config.fontWeight,
        cursor,
        gap,
        config.className({ disabled, loading })
      )}
    >
      {loading && <SpinnerSVG />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
