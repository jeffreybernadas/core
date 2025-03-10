import React from "react";
import { render } from "@testing-library/react";
import Page from "./index";

describe("<Page />", () => {
  it("should equal snapshot", () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toMatchSnapshot();
  });
});
