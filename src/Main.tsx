import React from "react";

import { Hero } from "./components/prvt/hero/Hero";
import { Logos } from "./components/prvt/logos/Logos";
import { FeatureGrid } from "./components/prvt/features/grid/FeatureGrid";
import { CodeDemo } from "./components/prvt/features/code/CodeDemo";
import { CallToAction } from "./components/prvt/call-to-action/CallToAction";
import { Footer } from "./components/prvt/footer/Footer";
import { NavBar } from "./components/prvt/navbar/NavBar";

const Main = () => {
  return (
    <div className="bg-zinc-950 text-zinc-200 selection:bg-zinc-600">
      <NavBar />
      <Hero />
      <Logos />
      <FeatureGrid />
      <CodeDemo />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Main;
