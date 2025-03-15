import React from "react";
import { cn } from "../../lib";

interface DrawOutlineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly buttonClassName?: string;
}

const DrawOutlineButton = ({
  children,
  buttonClassName,
  ...props
}: DrawOutlineButtonProps) => {
  return (
    <button
      className={cn(
        "group relative px-4 py-2 font-medium text-slate-500 transition-colors duration-[400ms] hover:text-indigo-300 dark:text-white dark:hover:text-indigo-300",
        buttonClassName,
      )}
      {...props}
    >
      <span>{children}</span>
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export type { DrawOutlineButtonProps };
export default DrawOutlineButton;
