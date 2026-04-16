
export type CounterProps = {
  initialCount?: number;
};

export interface IButtonProps {
    dataTestId: string;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}