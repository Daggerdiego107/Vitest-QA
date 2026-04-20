/* Exercise 06: React Testing Library - UserAccount /
/
    In this exercise, you will be testing the UserAccount component using React Testing Library.
    The UserAccount component receives a user prop and displays the user's name and edit button.
    You will write tests to check if the component renders correctly based on the user prop.
    1) Test if the UserAccount component renders correctly with a user prop.
    2) Test if the Edit button is displayed only when the user is a manager.
    3) Test if the Edit button is not displayed when the user is not a manager.
    Remember to prepare user test data per test.
    */

import { describe, test, expect } from "vitest";
import { UserAccount } from "./userAccount";
import { render, screen } from "@testing-library/react";
import { mockUser, mockAdmin } from "./mockData";
import "@testing-library/jest-dom/vitest";

describe("UserAccount component", () => {
    test("UserAccount component renders correctly with  a user prop", () => {
        render(<UserAccount user={mockUser} />);
        const userName: HTMLElement = screen.getByText(/Name:/);
        expect(userName).toHaveTextContent("Name:John Doe"); 
    });

    test("Edit Button is displayed only when user is manager", () => {
        render(<UserAccount user={mockAdmin} />);
        const editButton: HTMLElement = screen.getByRole('button', { name: 'Edit Button' });
        expect(editButton).toBeInTheDocument();
    });

    test("Edit Button is not displayed when user is not a manager", () => {
        render(<UserAccount user={mockUser} />);
        const editButton: HTMLElement | null = screen.queryByRole('button', { name: 'Edit Button' });
        expect(editButton).not.toBeInTheDocument();
    });
});