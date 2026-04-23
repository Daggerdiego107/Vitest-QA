import { describe, test, vi, expect } from "vitest";

describe("Mocking examples", () => {
  test("Should mock getNumber function", () => {
    //Mocking function vi.fn() == vi.fn(() => undefined)
    const getNumber = vi.fn(() => 5000);
    const number = getNumber();
    expect(number).toBe(5000);
    expect(getNumber).toHaveBeenCalled();
    expect(getNumber).toHaveReturnedWith(5000);
  });

  test("Should mock getNumber function", () => {
    //Mocking function vi.fn() == vi.fn(() => undefined)
    const getNumber = vi.fn(() => 5000);
    const number = getNumber();
    expect(number).toBe(5000);
    getNumber.mockImplementation(() => 3000);
    expect(getNumber()).toBe(3000);
  });

  test("Should mock async function", async () => {
    const fetchUser = vi.fn();
    fetchUser.mockResolvedValue({ name: "Alice" });
    const user = await fetchUser();
    expect(user.name).toBe("Alice");
    fetchUser.mockRejectedValue(new Error("404 Not Found"));
    await expect(fetchUser()).rejects.toThrow("404 Not Found");
  });

  test("Inspecting mock calls", () => {
    const greet = vi.fn();
    greet("Alice");
    greet("Bob", "Jesus");
    // Number of times called
    expect(greet).toHaveBeenCalledTimes(2);
    // Check Specific Arguments
    expect(greet).toHaveBeenCalledWith("Alice");
    // Access the raw call data
    expect(greet.mock.calls).toEqual([["Alice"], ["Bob", "Jesus"]]);
    console.log("Mock Calls: ", greet.mock.calls);
    console.log("Mock Results: ", greet.mock.results);
  });

  test("Mocking a multiplication function", () => {
    const multiply = vi.fn();
    multiply.mockImplementation((a) => a * 2);
    expect(multiply(5)).toBe(10);
    expect(multiply).toHaveBeenCalledWith(5);
    expect(multiply).toHaveBeenCalledTimes(1);
  });
});
