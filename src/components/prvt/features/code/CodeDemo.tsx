import React from "react";
import { FiZap } from "react-icons/fi";

import { CodeCard } from "./CodeCard";
import { Minigrid } from "../../utils/Minigrid";
import { MaxWidthWrapper } from "../../utils/MaxWidthWrapper";
import { SectionHeadingSpacing } from "../../utils/SectionHeadingSpacing";
import { SectionHeading } from "../../utils/SectionHeading";
import { SectionSubheading } from "../../utils/SectionSubheading";

export const CodeDemo = () => {
  return (
    <section
      id="installation"
      className="relative overflow-hidden border-y border-zinc-700"
    >
      <MaxWidthWrapper className="relative z-20 py-20 md:py-36">
        <span className="mx-auto mb-3 block w-fit rounded bg-gradient-to-br from-zinc-800 to-zinc-950 p-3 text-3xl shadow-md shadow-blue-900">
          <FiZap />
        </span>
        <SectionHeadingSpacing>
          <SectionHeading persistCenter>How to use?</SectionHeading>
          <SectionSubheading persistCenter>
            Look how easy it is to integrate within your project
          </SectionSubheading>
        </SectionHeadingSpacing>
        <CodeCard />
      </MaxWidthWrapper>
      <Minigrid />
    </section>
  );
};
