import { render } from "@testing-library/react";
import { CoreButton } from "../..";

describe("<CoreButton />", () => {
  it("should equal snapshot", () => {
    const { baseElement } = render(<CoreButton label="Button" />);
    expect(baseElement).toMatchSnapshot();
  });
});
