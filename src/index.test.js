  
const fizzBuzz =require('./index');

describe('divisible test', () =>{
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
