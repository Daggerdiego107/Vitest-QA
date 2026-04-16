import React from "react";
import { useState } from "react";
import { IncrementButton } from "./IncrementButton";
import { ResetButton } from "./ResetButton";
import type { CounterProps } from "./ICounter";

const dataTestId: string = "Counter";
const Counter = ({ initialCount = 0 }: CounterProps) => {
    const [count, setCount] = useState<number>(initialCount);
    return (
        <div> 
            <header>
                <h1 data-testid={`${dataTestId}-Header`}>This is a Counter</h1>
            </header>
            <div data-testid={`${dataTestId}-Value`}>{count}</div>
            <ResetButton dataTestId={dataTestId} setCount={setCount}/>
            <IncrementButton dataTestId={dataTestId} setCount={setCount}/>
        </div>
    );
};

export { Counter };