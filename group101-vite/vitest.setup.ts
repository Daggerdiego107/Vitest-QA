import "@testing-library/jest-dom";
import { beforeAll, afterAll, afterEach } from "vitest";
import { server } from "./src/mocks/node";

// Establish API mocking before all tests.
beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
