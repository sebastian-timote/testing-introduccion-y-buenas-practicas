  
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

const archivostest = {
    saludos,
    fizzBuzz
}

module.exports = archivostest;