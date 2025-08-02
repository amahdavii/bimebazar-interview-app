import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BottomSheetContent: FC<Props> = ({ children }) => {
  return (
    <div className="py-[0.5rem]">
      <div className="py-[0.5rem] px-[0.75rem]">{children}</div>
    </div>
  );
};

export default BottomSheetContent;
