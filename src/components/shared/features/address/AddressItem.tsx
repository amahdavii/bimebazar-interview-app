import { FC } from "react";
import clsx from "clsx";
import CloseSVG from "@/components/icons/CloseSVG";
import { useModalQuery } from "@/hooks/useModalQuery";

interface Props {
  id: string;
  title: string;
  address: string;
  selectedId: string | null;
  onSelect: (id: string) => void;
  onRemove: (id: string) => void;
}

const AddressItem: FC<Props> = ({
  id,
  title,
  address,
  selectedId,
  onSelect,
  onRemove,
}) => {
  const isSelected = id === selectedId;
  const { open } = useModalQuery("modal", "delete-address");

  return (
    <li
      onClick={() => onSelect(id)}
      className="relative flex items-start gap-[10px] cursor-pointer"
    >
      <div
        className={clsx(
          "w-[16px] h-[16px] min-w-[16px] rounded-full border-[2px]",
          isSelected ? "bg-black border-[#C2C2C2]" : "bg-white border-[#C2C2C2]"
        )}
      />

      <div className="flex flex-col flex-1">
        <span className="text-sm font-semibold text-black">{title}</span>
        <span className="text-[13px] text-[var(--text-label)] leading-[20px] mt-[2px]">
          {address}
        </span>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id as string);
          open();
        }}
      >
        <CloseSVG color="var(--color-light-red)" width={14} height={14} />
      </button>
    </li>
  );
};

export default AddressItem;
