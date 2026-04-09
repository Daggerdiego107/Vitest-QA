import { describe, test, expect} from 'vitest';
import { add, substract, multiply, divide } from './mathOperations';

const a = 2;
const b = 10;
const c = 0;

describe('Math Operations', () => {
    test('Addition', () => {
        const result = add(a, b);
        expect(result).toBe(12);
    });
    test('Substraction', () => {
        const result = substract(a, b);
        expect(result).toBe(-8);
    });
    test('Multiplication', () => {
        const result = multiply(a, b);
        expect(result).toBe(20);
    });
    test('Division', () => {
        const result = divide(a, b);
        expect(result).toBe(0.2);
    });
    test('Division by zero', () => {
        expect(() => divide(a, c)).toThrow("Cannot divide by zero");
    });
});