import { Counter } from "./Counter";
import { describe, test, expect} from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { setUpUserEvent } from "./setUpUserEvent";

describe("Counter component", () => {
    test("it should render the component", () => {
        render(<Counter />);
        const currentCount: HTMLElement = screen.getByTestId("Counter-Value");
        screen.debug(currentCount);
        expect(currentCount.textContent).toBe('0');
        // expect(currentCount.innerHTML).toBe('0');
    });

    test("it should render the component with jest dom", () => {
        render(<Counter />);
        const currentCount: HTMLElement = screen.getByTestId("Counter-Value");
        expect(currentCount).toHaveTextContent("0");
    });

    test("it should increment when the increment button is pressed", async () => {
        const { user } = setUpUserEvent(<Counter />);
        const currentCount: HTMLElement = screen.getByTestId("Counter-Value");
        const incrementButton: HTMLElement = screen.getByRole('button', { name: 'Increment' });
        expect(currentCount).toHaveTextContent("0");
        await user.click(incrementButton);
        await user.click(incrementButton);
        expect(currentCount).toHaveTextContent("2");
    });

    test("it should reset when the reset button is pressed", async () => {
        const { user } = setUpUserEvent(<Counter />);
        const currentCount: HTMLElement = screen.getByTestId("Counter-Value");
        const incrementButton: HTMLElement = screen.getByRole('button', { name: 'Increment' });
        const resetButton: HTMLElement = screen.getByRole('button', { name: 'Reset' });
        await user.click(incrementButton);
        await user.click(incrementButton);
        await user.click(resetButton);
        expect(currentCount).toHaveTextContent("0");
    });
});