"use client";

import { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";
import { baseStyles, errorState, normalState } from "./config";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const TextField: FC<Props> = ({ error, className, ...props }) => {
  return (
    <div className="flex flex-col gap-1 w-full bg-white">
      <input
        {...props}
        className={clsx(
          baseStyles,
          error ? errorState : normalState,
          className
        )}
      />
      {error && (
        <span className="text-[14px] text-[var(--input-error)] font-normal">
          {error}
        </span>
      )}
    </div>
  );
};

export default TextField;
