import React from "react";
import { SiNpm, SiWebpack } from "react-icons/si";

import { Card } from "../../utils/Card";
import { CalloutChip } from "../../utils/CalloutChip";
import { CornerBlur } from "../../utils/CornerBlur";

export const MiniCard2 = () => {
  return (
    <div className="col-span-2 h-[415px] sm:h-[375px] md:col-span-1">
      <Card>
        <CalloutChip>Feature #3</CalloutChip>
        <p className="mb-1.5 text-2xl">Use anywhere</p>
        <p className="text-zinc-400">
          Use via Webpack 5's Module Federation through remote entry or install
          as an NPM package. Whichever you prefer, it will work seamlessly.
        </p>

        <div className="absolute -bottom-2 left-2 right-2 z-10 h-40 rounded-xl border border-zinc-700 bg-zinc-800/50 p-4">
          <div className="mb-3 flex justify-evenly h-full">
            <div className="flex flex-col justify-evenly items-center flex-1">
              <SiWebpack className="text-blue-300 size-12" />
              <p className="text-zinc-400 text-xl">Module Federation</p>
            </div>
            <div className="flex flex-col justify-evenly items-center flex-1">
              <SiNpm className="text-red-500 size-12" />
              <p className="text-zinc-400 text-xl">NPM</p>
            </div>
          </div>
        </div>
        <CornerBlur />
      </Card>
    </div>
  );
};
