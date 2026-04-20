import React, { act } from "react";
import { createRoot } from "react-dom/client";
import { describe, test, expect } from "vitest";
import { Counter } from "./Counter";

describe("", () => {
    test("Test counter with React DOM", () => {
        //Create a div to render your component to (document.createElement)
        const div = document.createElement("div");

        //Append the div to the document.body (document.body.append)
        const root = createRoot(div);
        
        //Use the createRoot to render the <Counter /> to the div
        act(() => root.render(<Counter />));
        const [reset, increment] = div.querySelectorAll('button');
        const count = (div.firstChild as HTMLElement).querySelector('h1');

        expect(count!.textContent).toBe("0");
        act(() => increment.click());
        expect(count!.textContent).toBe("1");
    })
});