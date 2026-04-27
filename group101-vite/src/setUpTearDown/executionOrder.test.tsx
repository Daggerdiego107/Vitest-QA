// Test beforeAll, afterAll, beforeEach, afterEach execution order
import { describe, expect, test, afterEach, beforeEach, beforeAll, afterAll } from "vitest";

const executionOrder: string[] = [];

describe("Execution Order of Setup and TearDown", () => {
    beforeAll(() => {
        executionOrder.push("beforeAll");
    });

    beforeEach(() => {
        executionOrder.push("beforeEach");
    });

    afterEach(() => {
        executionOrder.push("afterEach");
    });

    afterAll(() => {
        executionOrder.push("afterAll");
    });

    test("Execution Order Test 1", () => {
        expect(executionOrder).toEqual(["beforeAll", "beforeEach"]);
    });

    test("Execution Order Test 2", () => {
        expect(executionOrder).toEqual(["beforeAll", "beforeEach", "afterEach", "beforeEach"]);
    });
});

describe("Execution Order of Setup and TearDown - Final Check", () => {
    test("Final Execution Order", () => {
        expect(executionOrder).toEqual([
            "beforeAll",
            "beforeEach",
            "afterEach",
            "beforeEach",
            "afterEach",
            "afterAll"
        ]);
    });
});