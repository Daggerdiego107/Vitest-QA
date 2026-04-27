import { describe, expect, test, afterEach, beforeEach, beforeAll, afterAll } from "vitest";

const executionOrder: string[] = [];

beforeAll(() => {
    executionOrder.push("beforeAll");
});

beforeEach(() => {
    executionOrder.push("beforeEach externo");
});

afterEach(() => {
    executionOrder.push("afterEach externo");
});

afterAll(() => {
    executionOrder.push("afterAll");
});

describe("Execution Order of Setup and TearDown", () => {
    beforeEach(() => {
        executionOrder.push("beforeEach interno");
    });

    afterEach(() => {
        executionOrder.push("afterEach interno");
    });

    test("Execution Order Test 1", () => {
        expect(executionOrder).toEqual(["beforeAll", "beforeEach externo", "beforeEach interno"]);
    });

    test("Execution Order Test 2", () => {
        expect(executionOrder).toEqual(["beforeAll", "beforeEach externo", "beforeEach interno", "afterEach interno", "afterEach externo", "beforeEach externo", "beforeEach interno"]);
    });
});

describe("Execution Order of Setup and TearDown - Final Check", () => {
    test("Final Execution Order", () => {
        expect(executionOrder).toEqual(["beforeAll", "beforeEach externo", "beforeEach interno", "afterEach interno", "afterEach externo", "beforeEach externo", "beforeEach interno", "afterEach interno", "afterEach externo", "beforeEach externo"]);
    });
});