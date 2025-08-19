// Exportando funciones individualmente
export function sumar(a, b) {
    return a + b;
}
export const restar = (a, b) => {
    return a - b;
}
// Exportando una constante
export const PI = 3.1416;
// Exportando una clase
export class Calculadora {
    static multiplicar(a, b) {
        return a * b;
    }
}

// Exportando las funciones todas juntas
function dividir(a, b) {
    return a / b;
}
const E = 2.718;
class Algebra {
    static potencia(base, exponente) {
        return Math.pow(base, exponente);
    }
}
// Exportando todo junto
export { dividir, E, Algebra };