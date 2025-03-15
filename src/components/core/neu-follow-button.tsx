import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  HTMLMotionProps,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "../../lib";

export interface NeuButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  readonly children: string;
  readonly showArrow?: boolean;
  readonly buttonClassName?: string;
  readonly arrowClassName?: string;
}

const SPRING_OPTIONS = {
  mass: 1.5,
  stiffness: 500,
  damping: 100,
};

const NeuFollowButton = ({
  children,
  showArrow = true,
  buttonClassName,
  arrowClassName,
  ...props
}: NeuButtonProps) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, SPRING_OPTIONS);
  const ySpring = useSpring(y, SPRING_OPTIONS);
  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!ref.current) return;
    const { height, width } = ref.current.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;
    const xPct = offsetX / width;
    const yPct = 1 - offsetY / height;
    const newY = 12 + yPct * 12;
    const newX = 12 + xPct * 12;
    x.set(newX);
    y.set(-newY);
  };

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="mx-auto h-20 w-full max-w-72 bg-black dark:bg-white">
      <motion.button
        ref={ref}
        style={{ transform }}
        onMouseMove={handleMove}
        onMouseLeave={handleReset}
        onMouseDown={handleReset}
        className={cn(
          "group flex h-full w-full items-center justify-between border-2 border-black bg-white px-8 text-xl font-semibold dark:bg-black dark:border-white",
          buttonClassName,
        )}
        {...props}
      >
        <Copy>{children}</Copy>
        {showArrow && <Arrow className={arrowClassName} />}
      </motion.button>
    </div>
  );
};

const Copy = ({ children }: { readonly children: string }) => {
  return (
    <span className="relative overflow-hidden">
      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full dark:text-white">
        {children}
      </span>
      <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0 dark:text-white">
        {children}
      </span>
    </span>
  );
};

const Arrow = ({ className }: { readonly className?: string }) => (
  <div
    className={cn(
      "pointer-events-none flex h-6 w-6 overflow-hidden text-2xl",
      className,
    )}
  >
    <FiArrowRight className="shrink-0 -translate-x-full text-black dark:text-white transition-transform duration-300 group-hover:translate-x-0" />
    <FiArrowRight className="shrink-0 -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
  </div>
);

export default NeuFollowButton;
