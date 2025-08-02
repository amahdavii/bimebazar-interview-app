import CloseSVG from "@/components/icons/CloseSVG";
import { FC } from "react";

interface Props {
  title: string;
  onClose: () => void;
}

const BottomSheetHeader: FC<Props> = ({ title, onClose }) => {
  return (
    <header className="flex items-center justify-between border-b border-[var(--bottom-sheet-border)] mb-3 px-[0.75rem] py-[1rem]">
      <h2 className="text-base font-semibold">{title}</h2>
      <button onClick={onClose} className="text-gray-400">
        <CloseSVG width={18} height={18} />
      </button>
    </header>
  );
};

export default BottomSheetHeader;
