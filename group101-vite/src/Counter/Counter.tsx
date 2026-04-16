import React from "react";

type CounterProps = {
  initialCount?: number;
};

interface ICounterProps {
  initialCount?: number;
}

const dataTestId: string = "Counter";


export const Counter = ({ initialCount = 0 }: CounterProps) => {
    const [count, setCount] = React.useState(initialCount);
    // llamadas a APIs
    // constantes terciarias

    // funciones
    function reset() {
        setCount(0);
    }



    return (
        <div> 
            <header>
                <h1 data-testid={`${dataTestId}-Header`}>This is a COUNTERR</h1>
            </header>
            <div data-testid={`${dataTestId}-Value`}>{count}</div>
            <div>
                <button
                name="reset-button"
                data-testid={`${dataTestId}-Reset-Button`} 
                onClick={() => reset()}
                >
                    Reset

                </button>

                <button
                data-testid={`${dataTestId}-Increment-Button`}
                onClick={() => setCount(count + 1)}
                >
                    Increment
                </button>
            </div>
        </div>
    );
}