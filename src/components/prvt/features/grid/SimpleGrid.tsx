import React from "react";
import { FiCheck, FiDollarSign } from "react-icons/fi";
import { FaBalanceScale, FaMagic, FaPalette } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IconType } from "react-icons";

export const SimpleGrid = () => (
  <div className="relative z-10 grid grid-cols-2 gap-9 px-3 md:grid-cols-3 md:gap-12 md:px-6">
    <Item
      Icon={FaBalanceScale}
      title="Open source"
      subtitle="Project is completely open source and free to use under MIT license."
    />
    <Item
      Icon={SiTypescript}
      title="TypeScript based"
      subtitle="All components, hooks, and utilities export types are built with type safety in mind."
    />
    <Item
      Icon={FaMagic}
      title="Easy to use"
      subtitle="Import components, hooks, and utilities and start using them right away."
    />
    <Item
      Icon={FiDollarSign}
      title="Completely free"
      subtitle="You read that right, it's completely free to use in any project."
    />
    <Item
      Icon={FaPalette}
      title="Theming support"
      subtitle="All components that are under an existing React Library such as shadcn/ui has it's own theming support."
    />
    <Item
      Icon={FiCheck}
      title="Everything you need?"
      subtitle="Might be, might not be. You'll have to find out for yourself."
    />
  </div>
);

const Item = ({
  Icon,
  title,
  subtitle,
}: {
  Icon: IconType;
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <h4 className="mb-1.5 flex items-start text-lg font-medium md:text-xl">
        <Icon className="mr-1.5 h-[26px] text-blue-300" />
        {title}
      </h4>
      <p className="text-sm text-zinc-400 md:text-base">{subtitle}</p>
    </div>
  );
};
