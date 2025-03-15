import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib";

interface AIButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly buttonClassName?: string;
}

const AIButton = ({ children, buttonClassName, ...props }: AIButtonProps) => {
  return (
    <button
      className={cn(
        "text-white font-medium px-3 py-2 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95",
        buttonClassName,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        initial={{ left: 0 }}
        animate={{ left: "-300%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 4,
          ease: "linear",
        }}
        className="bg-[linear-gradient(to_right,#8f14e6,#e614dc,#e61453,#e68414,#e6e614)] absolute z-0 inset-0 w-[400%]"
      />
    </button>
  );
};

export type { AIButtonProps };
export default AIButton;
