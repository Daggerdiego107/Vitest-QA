// Snapshot Testing
// Captures the output of a piece of code and saves it to a file. Future runs compare the output to the saved snapshot, alerting you to any changes.

import { describe, test, expect } from "vitest";

function generateGreeting(name: string) {
    return {
        message: `Hello, ${name}!`,
        timestamp: null,
        version: 2,
    }
}

describe("Snapshot Testing Example", () => {
    test("Generates a greeting with a snapshot", () => {
        expect(generateGreeting("Jesus")).toMatchSnapshot();
    });
});