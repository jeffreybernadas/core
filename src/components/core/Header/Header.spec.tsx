import React from "react";
import { render } from "@testing-library/react";
import Header from "./index";

describe("<Header />", () => {
  it("should equal snapshot", () => {
    const { baseElement } = render(
      <Header
        onCreateAccount={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
      />,
    );
    expect(baseElement).toMatchSnapshot();
  });
});
