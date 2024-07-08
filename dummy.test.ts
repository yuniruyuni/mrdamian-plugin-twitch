import { describe, expect, it } from "bun:test";
import { dummy } from "./dummy";

describe("dummy", () => {
  it("can add two values", () => {
    expect(dummy(1, 1)).toEqual(2);
  });
});
