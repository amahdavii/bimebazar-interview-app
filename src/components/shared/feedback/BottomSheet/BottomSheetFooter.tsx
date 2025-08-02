import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BottomSheetFooter: FC<Props> = ({ children }) => {
  return (
    <footer className="flex gap-2 p-[0.625rem] bg-white shadow-[var(--shadow-footer)]">
      {children}
    </footer>
  );
};

export default BottomSheetFooter;
