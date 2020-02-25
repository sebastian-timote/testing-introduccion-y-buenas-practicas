  //esta libreria se llama jest 
  //el nombre del archivo debe tener la palabra .test ejemplo index.test.js
  //el comando para ejecutar esta prueba es npm test en el terminal 
const archivostest =require('./index');//ruta del archivo que requiero

describe('divisible test', () =>{//test primero
    test('return Fizz if divisible by 3', () => {
        expect(archivostest.fizzBuzz(3)).toBe('Fizz');//expect es el dato que le paso y tobe es el archivo que espero que me salga
    });
    test('return Buzz if divisible by 5', () => {
        expect(archivostest.fizzBuzz(5)).toBe('Buzz');
    });
    test('return fizzBuzz if divisible by3 and 5', () => {
        expect(archivostest.fizzBuzz(15)).toBe('fizzBuzz');
    });
});
describe('nombretest', () =>{//segundo test
    test('saludo', () => {
        expect(archivostest.saludos("sebas")).toBe('hello sebas');
    });
});
