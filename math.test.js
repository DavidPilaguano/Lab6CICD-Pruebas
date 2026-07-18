const { factorial, fibonacci } = require('./math');

describe('Pruebas de la función factorial', () => {
    test('El factorial de 0 debe ser 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('El factorial de 1 debe ser 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('El factorial de 5 debe ser 120', () => {
        expect(factorial(5)).toBe(100);
    });

    test('Debe generar un error con números negativos', () => {
        expect(() => factorial(-1)).toThrow(
            'El número debe ser un entero no negativo'
        );
    });
});

describe('Pruebas de la función fibonacci', () => {
    test('La posición 0 de Fibonacci debe ser 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('La posición 1 de Fibonacci debe ser 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('La posición 6 de Fibonacci debe ser 8', () => {
        expect(fibonacci(6)).toBe(8);
    });

    test('Debe generar un error con posiciones negativas', () => {
        expect(() => fibonacci(-1)).toThrow(
            'La posición debe ser un entero no negativo'
        );
    });
});