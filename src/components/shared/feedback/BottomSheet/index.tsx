"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const BottomSheet: FC<Props> = ({ open, onClose, children, className }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div
        className="absolute inset-0"
        style={{ background: "var(--backdrop-dark)" }}
        onClick={onClose}
      />

      <div
        className={clsx("relative w-full animate-slide-up", className)}
        style={{
          backgroundColor: "var(--color-white)",
          boxShadow: "var(--shadow-soft)",
          color: "var(--color-black)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
