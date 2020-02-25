const fizzBuzz = require('./index');

describe('Fizzbuzz should', () =>{
    test('return the same number as passed', () => {
        expect(fizzBuzz(1)).toBe(1);
        expect(fizzBuzz(2)).toBe(2);
    });
    test('return Fizz if divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });
    test('return Buzz if divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });
    test('return fizzBuzz if divisible by3 and 5', () => {
        expect(fizzBuzz(15)).toBe('fizzBuzz');
    });
});