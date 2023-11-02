const math = require('../math');

describe('math module', () => {
    describe('sum function', () => {
        it('should return the sum of two numbers', () => {
            expect(math.sum(2, 3)).toBe(5);
            expect(math.sum(-2, 3)).toBe(1);
            expect(math.sum(0, 0)).toBe(0);
        });
    });

    describe('subtract function', () => {
        it('should return the difference of two numbers', () => {
            expect(math.subtract(3, 2)).toBe(1);
            expect(math.subtract(-2, 3)).toBe(-5);
            expect(math.subtract(0, 0)).toBe(0);
        });
    });

    describe('multiply function', () => {
        it('should return the product of two numbers', () => {
            expect(math.multiply(2, 3)).toBe(6);
            expect(math.multiply(-2, 3)).toBe(-6);
            expect(math.multiply(0, 0)).toBe(0);
        });
    });

    describe('divide function', () => {
        it('should return the quotient of two numbers', () => {
            expect(math.divide(6, 3)).toBe(2);
            expect(math.divide(-6, 3)).toBe(-2);
            expect(math.divide(0, 5)).toBe(0);
        });

        it('should throw an error when dividing by zero', () => {
            expect(() => math.divide(5, 0)).toThrow();
        });
    });

    describe('exponentiate function', () => {
        it('should return the result of raising a number to a power', () => {
            expect(math.exponentiate(2, 3)).toBe(8);
            expect(math.exponentiate(-2, 3)).toBe(-8);
            expect(math.exponentiate(0, 5)).toBe(0);
        });
    });
});
