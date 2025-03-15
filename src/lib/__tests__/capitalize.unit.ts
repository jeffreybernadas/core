import { capitalize } from "../capitalize";

describe("capitalize", () => {
  it("capitalizes the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
    expect(capitalize("openAI")).toBe("OpenAI");
  });

  it("handles edge cases", () => {
    expect(capitalize("")).toBe("");
    expect(capitalize("a")).toBe("A");
    expect(capitalize("123")).toBe("123");
  });
});
