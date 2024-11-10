import React from "react";

import { CoreButton, Button } from "./components";

const Main = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div className="bg-red-500">Name: host</div>
      <div className="test" style={{ backgroundColor: "red" }}>
        Framework: react
      </div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div>
      <Button>Test</Button>
      <CoreButton label="Test" />
    </div>
  );
};

export default Main;
