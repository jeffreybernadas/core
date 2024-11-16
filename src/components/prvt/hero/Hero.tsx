import React from "react";

import { GradientGrid } from "./GradientGrid";
import { Content } from "./Content";
import { Beams } from "../utils/Beams";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <Content />
      <Beams />
      <GradientGrid />
    </section>
  );
};
