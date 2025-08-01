"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

interface Props {
  icon: ReactNode;
  title: string;
  className?: string;
}

const SectionHeader: FC<Props> = ({ icon, title, className }) => {
  return (
    <header
      className={clsx(
        "px-2 py-3 shadow-[var(--shadow-soft)] flex items-center bg-white",
        className
      )}
    >
      <span className="ml-1.5 w-8 h-8 bg-[var(--color-orange)] rounded-md flex justify-center items-center">
        {icon}
      </span>
      <h2 className="text-base font-semibold text-black">{title}</h2>
    </header>
  );
};

export default SectionHeader;
