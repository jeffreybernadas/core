import React from "react";
import { motion } from "framer-motion";
import { SiHtmx, SiMantine, SiShadcnui, SiTailwindcss } from "react-icons/si";

export const Logos = () => {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden border-b border-zinc-700 py-6">
      <span className="mx-auto mb-9 block w-fit bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-lg text-transparent">
        Made possible with
      </span>
      <div className="flex overflow-hidden">
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItems />
        </TranslateWrapper>
      </div>

      <div className="absolute bottom-0 left-0 top-0 w-1/3 max-w-64 bg-gradient-to-r from-zinc-950 to-zinc-950/0" />
      <div className="absolute bottom-0 right-0 top-0 w-1/3 max-w-64 bg-gradient-to-l from-zinc-950 to-zinc-950/0" />
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: React.ReactNode;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-12 px-6"
    >
      {children}
    </motion.div>
  );
};

const LogoItems = () => (
  <>
    <LogoOne />
    <LogoTwo />
    <LogoThree />
    <LogoFour />
  </>
);

const LogoOne = () => (
  <div className="flex items-center gap-2">
    <SiHtmx className="size-12 text-purple-400" />
    <h1 className="text-xl font-bold text-zinc-200">hover.dev</h1>
  </div>
);

const LogoTwo = () => (
  <div className="flex items-center gap-2">
    <SiTailwindcss className="size-12 text-blue-400" />
    <h1 className="text-xl font-bold text-zinc-200">TailwindCSS</h1>
  </div>
);

const LogoThree = () => (
  <div className="flex items-center gap-2">
    <SiShadcnui className="size-12" />
    <h1 className="text-xl font-bold text-zinc-200">shadcn/ui</h1>
  </div>
);

const LogoFour = () => (
  <div className="flex items-center gap-2">
    <SiMantine className="size-12 text-blue-500 bg-white rounded-full" />
    <h1 className="text-xl font-bold text-zinc-200">mantine.dev</h1>
  </div>
);
