import React from "react";
import type { IButtonProps } from "./ICounter";

export const IncrementButton = ({ dataTestId, setCount }: IButtonProps) => {
    return (
        <div>
            <button
                name = "increment"
                data-testid={`${dataTestId}-Increment-Button`}
                onClick={() => setCount((n) => n + 1)}
                >
                    Increment
            </button>
        </div>
    );
};