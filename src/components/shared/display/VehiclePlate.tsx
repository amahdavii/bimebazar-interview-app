"use client";

import Image from "next/image";
import { FC } from "react";

interface Props {
  right: string;
  letter: string;
  center: string;
  left: string;
}

const VehiclePlate: FC<Props> = ({ right, letter, center, left }) => {
  return (
    <div className="flex flex-row-reverse items-center border-2 border-black rounded-md overflow-hidden text-[1rem] font-bold h-[48px] w-fit bg-white">
      <div className="bg-[var(--color-blue)] text-white flex flex-col items-center justify-center w-[50px] h-full text-xs leading-tight">
        <Image
          src="/assets/images/iran-flag.svg"
          width="24"
          height="16"
          alt="Iran flag"
          className="mt-1"
        />
        <span className="mt-1">I.R.</span>
      </div>

      <div className="flex flex-row-reverse h-full">
        <div className="flex items-center justify-center w-[48px] border-l-2 px-3 h-full">
          {right}
        </div>

        <div className="flex items-center justify-center w-[48px] px-3 h-full">
          {letter}
        </div>

        <div className="flex items-center justify-center w-[64px] px-3 h-full">
          {center}
        </div>

        <div className="flex items-center justify-center w-[48px] px-3 h-full border-l-2 border-black">
          {left}
        </div>
      </div>
    </div>
  );
};

export default VehiclePlate;
