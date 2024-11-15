import { SimpleCalculator, TrignometryCalculator } from "../package/index.js"


describe('Simple Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new SimpleCalculator();
    });

    describe('add', () => {
        it('should add two positive numbers correctly', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });

        it('should handle negative numbers', () => {
            expect(calculator.add(-2, 3)).toBe(1);
            expect(calculator.add(2, -3)).toBe(-1);
            expect(calculator.add(-2, -3)).toBe(-5);
        });

        it('should handle zero', () => {
            expect(calculator.add(0, 5)).toBe(5);
            expect(calculator.add(5, 0)).toBe(5);
            expect(calculator.add(0, 0)).toBe(0);
        });

        it('should handle decimal numbers', () => {
            expect(calculator.add(2.5, 3.7)).toBeCloseTo(6.2);
        });
    });

    describe('subtract', () => {
        it('should subtract two positive numbers correctly', () => {
            expect(calculator.subtract(5, 3)).toBe(2);
        });

        it('should handle negative numbers', () => {
            expect(calculator.subtract(-2, 3)).toBe(-5);
            expect(calculator.subtract(2, -3)).toBe(5);
            expect(calculator.subtract(-2, -3)).toBe(1);
        });

        it('should handle zero', () => {
            expect(calculator.subtract(5, 0)).toBe(5);
            expect(calculator.subtract(0, 5)).toBe(-5);
            expect(calculator.subtract(0, 0)).toBe(0);
        });

        it('should handle decimal numbers', () => {
            expect(calculator.subtract(5.5, 3.2)).toBeCloseTo(2.3);
        });
    });

    describe('multiply', () => {
        it('should multiply two positive numbers correctly', () => {
            expect(calculator.multiply(2, 3)).toBe(6);
        });

        it('should handle negative numbers', () => {
            expect(calculator.multiply(-2, 3)).toBe(-6);
            expect(calculator.multiply(2, -3)).toBe(-6);
            expect(calculator.multiply(-2, -3)).toBe(6);
        });

        it('should handle zero', () => {
            expect(calculator.multiply(5, 0)).toBe(0);
            expect(calculator.multiply(0, 5)).toBe(0);
            expect(calculator.multiply(0, 0)).toBe(0);
        });

        it('should handle decimal numbers', () => {
            expect(calculator.multiply(2.5, 3.2)).toBeCloseTo(8);
        });
    });

    describe('divide', () => {
        it('should divide two positive numbers correctly', () => {
            expect(calculator.divide(6, 2)).toBe(3);
        });

        it('should handle negative numbers', () => {
            expect(calculator.divide(-6, 2)).toBe(-3);
            expect(calculator.divide(6, -2)).toBe(-3);
            expect(calculator.divide(-6, -2)).toBe(3);
        });

        it('should handle division by 1', () => {
            expect(calculator.divide(5, 1)).toBe(5);
        });

        it('should handle decimal numbers', () => {
            expect(calculator.divide(5.5, 2)).toBeCloseTo(2.75);
        });

        it('should throw error when dividing by zero', () => {
            expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
        });
    });

    describe('calculate', () => {
        it('should perform addition with "+" operator', () => {
            expect(calculator.calculate(2, 3, '+')).toBe(5);
        });

        it('should perform subtraction with "-" operator', () => {
            expect(calculator.calculate(5, 3, '-')).toBe(2);
        });

        it('should perform multiplication with "*" operator', () => {
            expect(calculator.calculate(2, 3, '*')).toBe(6);
        });

        it('should perform division with "/" operator', () => {
            expect(calculator.calculate(6, 2, '/')).toBe(3);
        });

        it('should throw error for invalid operator', () => {
            expect(() => calculator.calculate(2, 3, '%')).toThrow('Invalid operator. Please use \'+\', \'-\', \'*\', or \'/\'');
        });

        it('should throw error for division by zero using calculate method', () => {
            expect(() => calculator.calculate(5, 0, '/')).toThrow('Division by zero is not allowed');
        });
    });
});

describe('TrignometryCalculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new TrignometryCalculator();
    });

    describe('sin', () => {
        test('should calculate sine of 0 degrees correctly', () => {
            expect(calculator.sin(0)).toBeCloseTo(0);
        });

        test('should calculate sine of 30 degrees correctly', () => {
            expect(calculator.sin(30)).toBeCloseTo(0.5);
        });

        test('should calculate sine of 45 degrees correctly', () => {
            expect(calculator.sin(45)).toBeCloseTo(0.7071067811865476);
        });

        test('should calculate sine of 90 degrees correctly', () => {
            expect(calculator.sin(90)).toBeCloseTo(1);
        });

        test('should calculate sine of negative angles correctly', () => {
            expect(calculator.sin(-30)).toBeCloseTo(-0.5);
        });
    });

    describe('cos', () => {
        test('should calculate cosine of 0 degrees correctly', () => {
            expect(calculator.cos(0)).toBeCloseTo(1);
        });

        test('should calculate cosine of 60 degrees correctly', () => {
            expect(calculator.cos(60)).toBeCloseTo(0.5);
        });

        test('should calculate cosine of 90 degrees correctly', () => {
            expect(calculator.cos(90)).toBeCloseTo(0);
        });

        test('should calculate cosine of 180 degrees correctly', () => {
            expect(calculator.cos(180)).toBeCloseTo(-1);
        });

        test('should calculate cosine of negative angles correctly', () => {
            expect(calculator.cos(-60)).toBeCloseTo(0.5);
        });
    });

    describe('tan', () => {
        test('should calculate tangent of 0 degrees correctly', () => {
            expect(calculator.tan(0)).toBeCloseTo(0);
        });

        test('should calculate tangent of 45 degrees correctly', () => {
            expect(calculator.tan(45)).toBeCloseTo(1);
        });

        test('should throw error for 90 degrees', () => {
            expect(() => calculator.tan(90)).toThrow('Tangent is undefined for this angle (90° or 270°)');
        });

        test('should throw error for 270 degrees', () => {
            expect(() => calculator.tan(270)).toThrow('Tangent is undefined for this angle (90° or 270°)');
        });

        test('should calculate tangent of negative angles correctly', () => {
            expect(calculator.tan(-45)).toBeCloseTo(-1);
        });
    });

    describe('edge cases and special values', () => {
        test('should handle very large angles', () => {
            expect(calculator.sin(360)).toBeCloseTo(0);
            expect(calculator.cos(360)).toBeCloseTo(1);
            expect(calculator.tan(360)).toBeCloseTo(0);
        });

        test('should handle decimal degree values', () => {
            expect(calculator.sin(45.5)).toBeDefined();
            expect(calculator.cos(45.5)).toBeDefined();
            expect(calculator.tan(45.5)).toBeDefined();
        });

        test('should be periodic for sin and cos', () => {
            expect(calculator.sin(0)).toBeCloseTo(calculator.sin(360));
            expect(calculator.cos(0)).toBeCloseTo(calculator.cos(360));
        });
    });
});