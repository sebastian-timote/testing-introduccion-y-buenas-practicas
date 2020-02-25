  
function fizzBuzz(number) {
    
    if (number % 15 === 0) {
        return 'fizzBuzz';
    }
    if (number % 3 === 0) {
        return 'Fizz';
    }
    if (number % 5 === 0) {
        return 'Buzz';
    }
    return number;
}

function saludos(data) {
    return "hello " + data;
}

const archivostest = {//lista de mis funciones 
    saludos,
    fizzBuzz
}

module.exports = archivostest;//export las funciones para que puedan acceder 