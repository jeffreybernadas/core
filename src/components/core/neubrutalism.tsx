import React from "react";
import { cn } from "../../lib";

interface NeuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly buttonClassName?: string;
}

const NeuButton = ({ children, buttonClassName, ...props }: NeuButtonProps) => {
  return (
    <button
      className={cn(
        "px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]",
        buttonClassName,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export type { NeuButtonProps };
export default NeuButton;
