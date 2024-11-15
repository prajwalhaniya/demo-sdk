class SimpleCalculator {
    public add(a: number, b: number): number {
        return a + b;
    }

   
    public subtract(a: number, b: number): number {
        return a - b;
    }

   
    public multiply(a: number, b: number): number {
        return a * b;
    }

    public divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    }

    public calculate(a: number, b: number, operator: string): number {
        switch (operator) {
            case '+':
                return this.add(a, b);
            case '-':
                return this.subtract(a, b);
            case '*':
                return this.multiply(a, b);
            case '/':
                return this.divide(a, b);
            default:
                throw new Error("Invalid operator. Please use '+', '-', '*', or '/'");
        }
    }
}

export {
    SimpleCalculator
}