import type { IButtonProps } from "./ICounter";

export const ResetButton = ({ dataTestId, setCount }: IButtonProps) => {
    return (
        <button
            name="reset"
            data-testid={`${dataTestId}-ResetBtn`}
            onClick={() => setCount(0)}
        >
            Reset
        </button>
    )
};