import { describe, test, expect, vi, afterEach, beforeEach } from "vitest";
import { calculator } from "./mocking";

describe("Spy Functions Examples", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.resetAllMocks();
    vi.clearAllMocks();
  });

  test("Spying on a function", () => {
    const spy = vi.spyOn(calculator, "add");

    expect(calculator.add(1, 3)).toBe(4);
    // We use spy to observe calls
    expect(spy).toHaveBeenCalledWith(1, 3);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
