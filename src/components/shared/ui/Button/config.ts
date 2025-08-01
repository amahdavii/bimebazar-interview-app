import clsx from "clsx";

export type Variant = "default" | "primary" | "secondary";
export type ButtonType = "button" | "submit" | "reset";

interface ButtonStyleConfig {
  base: string;
  fontWeight: string;
  className: (options: { disabled: boolean; loading: boolean }) => string;
}

export const buttonStyles: Record<Variant, ButtonStyleConfig> = {
  default: {
    base: "px-[86px] bg-[var(--btn-default-bg)] text-[var(--btn-default-text)] border-none rounded-none",
    fontWeight: "font-semibold",
    className: () => "",
  },
  primary: {
    base: "bg-[var(--btn-primary-bg)] border min-w-[160px]",
    fontWeight: "font-medium",
    className: ({ disabled, loading }) =>
      clsx(
        loading ? "px-[37px]" : "px-[52px]",
        disabled
          ? "text-[var(--btn-primary-disabled-text)] border-[var(--btn-primary-disabled-border)]"
          : "text-[var(--btn-primary-text)] border-[var(--btn-primary-border)]"
      ),
  },
  secondary: {
    base: "min-w-[160px]",
    fontWeight: "font-medium",
    className: ({ disabled, loading }) =>
      clsx(
        loading ? "px-[37px]" : "px-[52px]",
        disabled
          ? "bg-[var(--btn-secondary-disabled-bg)] text-[var(--btn-secondary-disabled-text)]"
          : loading
          ? "bg-[var(--btn-secondary-loading-bg)] text-[var(--btn-secondary-loading-text)]"
          : "bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)]"
      ),
  },
};
