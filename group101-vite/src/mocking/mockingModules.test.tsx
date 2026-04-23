import { describe, test, expect, vi } from "vitest";
import { getUser, variable } from "./mocking";

vi.mock("./mocking", () => {
  return {
    getUser: vi.fn(),
    variable: "Mock",
  };
});

describe("Mocking Modules Examples", () => {
  test("Mock a module", () => {
    vi.mocked(getUser).mockReturnValue("Mauricio");
    const user = getUser();
    expect(user).toBe("Mauricio");
    expect(variable).toBe("Mock");
  });
});
