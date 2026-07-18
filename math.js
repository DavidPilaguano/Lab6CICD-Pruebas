function factorial(number) {
    if (!Number.isInteger(number) || number < 0) {
        throw new Error('El número debe ser un entero no negativo');
    }

    if (number === 0 || number === 1) {
        return 1;
    }

    let result = 1;

    for (let i = 2; i <= number; i += 1) {
        result *= i;
    }

    return result;
}

function fibonacci(position) {
    if (!Number.isInteger(position) || position < 0) {
        throw new Error('La posición debe ser un entero no negativo');
    }

    if (position === 0) {
        return 0;
    }

    if (position === 1) {
        return 1;
    }

    let previous = 0;
    let current = 1;

    for (let i = 2; i <= position; i += 1) {
        const next = previous + current;
        previous = current;
        current = next;
    }

    return current;
}

module.exports = {
    factorial,
    fibonacci
};