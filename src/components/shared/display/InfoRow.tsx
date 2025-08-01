"use client";

import { FC } from "react";
import clsx from "clsx";

interface Props {
  label: string;
  value: string;
  className?: string;
}

const InfoRow: FC<Props> = ({ label, value, className }) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-between mb-[0.5rem] w-full",
        className
      )}
      style={{
        fontSize: "var(--font-size-sm)",
        fontWeight: "var(--font-weight-light)",
      }}
    >
      <span
        className="whitespace-nowrap"
        style={{ color: "var(--text-label)" }}
      >
        {label}
      </span>

      <div
        className="flex-1 mx-2 border-b border-dotted"
        style={{ borderColor: "var(--line-color)" }}
      />

      <span
        className="whitespace-nowrap"
        style={{
          color: "var(--text-value)",
          fontWeight: "var(--font-weight-normal)",
        }}
      >
        {value}
      </span>
    </div>
  );
};

export default InfoRow;