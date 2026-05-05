import { describe, expect, it } from "vitest";
import { greet } from "./index.js";

describe("greet", () => {
  it("uses the provided name", () => {
    expect(greet("World")).toBe("Hello, World!");
  });
});
