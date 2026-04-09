import { describe, test, expect, it, errorMessage} from "vitest";
import { shoppingList, taskData } from "../mockData";

describe("Matchers Example files", () => {

    // numbers, strings and booleans
    test.skip("common matcher", () => {
        expect(2+2).toBe(4);
    });

    // toEqual checks for internal structure of an object, array, sets, objects, maps, etc.
    test.skip("object matcher", () => {
        const a = { name: "John", age: 30};
        const b = { name: "John", age: 30};

        expect(a).toEqual(b);
    });

    test.skip("compare decimals", () => {
        expect(0.1 + 0.2).toBeCloseTo(0.3);
    });

    test.skip("compare decimals with greaterThan", () =>{
        expect(0.1 + 0.2).toBeGreaterThan(0.2);
    });

    test.skip("compare decimals with lessThan", () =>{
        expect(0.1 + 0.2).toBeLessThan(0.5);
    });

    it.skip("truthy and falsy", () => {
        const a = null;
        const b = undefined;
        const c = 0;
        const d = false;
        const e = "Hello";
        const f = null; // toBeTruthy()

        /*
        toBeNull: checks if the value is null
        toBeUndefined: checks if the value is undefined
        toBeFalsy: checks if the value is falsy (0, "", false, null, undefined, NaN)
        toBeDefined: checks if the value is defined (not undefined)
        toBeTruthy: checks if the value is truthy (not falsy)
        */

        expect(a).toBeNull();
        expect(b).toBeUndefined();
        expect(c).toBeFalsy();
        expect(d).toBeFalsy();
        expect(e).toBeDefined();
        expect(f).not.toBeTruthy();
    });

    test.skip("there is no I in team", () => {
        const errorMessage = "There is an error in the code";
        expect("team").not.toMatch(/I/);
        expect(errorMessage).toMatch(/error/);
    });

    test("The shopping list has milk on it", () => {
        expect(shoppingList).toContain('Milk');
    });

    test("The priority and assign are the same", () => {
        expect(taskData).toMatchObject({
            assign: 'Diego',
            priority: 1
        });

        expect(taskData).toHaveProperty('createdAt');
    });

    test("Compiling an empty string throws", () => {
        expect(() => compileCode('')).toThrow();
    });
});