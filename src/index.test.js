  
const archivostest =require('./index');

describe('divisible test', () =>{
    test('return Fizz if divisible by 3', () => {
        expect(archivostest.fizzBuzz(3)).toBe('Fizz');
    });
    test('return Buzz if divisible by 5', () => {
        expect(archivostest.fizzBuzz(5)).toBe('Buzz');
    });
    test('return fizzBuzz if divisible by3 and 5', () => {
        expect(archivostest.fizzBuzz(15)).toBe('fizzBuzz');
    });
});
describe('nombretest', () =>{
    test('saludo', () => {
        expect(archivostest.saludos("sebas")).toBe('hello sebas');
    });
});
