// Programación asíncrona y modularidad
// Iteradores y generadores asíncronos en JavaScript

// Ejecución de forma síncrona
/* for (let i=0; i<5; i++) {
    setTimeout(() => {
        console.log("Hola");
    }, 2000)
} */

/* const asyncIterable = {
    [Symbol.asyncIterator]() {
        let i = 0;
        return {
            async next() {
                if (i < 3) {
                    await new Promise(resolve => setTimeout(resolve, 1000)); // Simula retardo
                    return { value: i++, done: false };
                }
                return { done: true };
            }
        };
    }
};
// Uso del iterador asíncrono con `for await...of`
(async () => {
    for await (const value of asyncIterable) {
        console.log(value); // Se imprimen 0, 1, 2 con 1 segundo de intervalo
    }
})(); */

// Generadores asíncronos (async function*)
/* async function* contadorAsincrono() {
    for (let i = 0; i < 3; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simula retardo
        yield i;
    }
}
// Uso del generador asíncrono
(async () => {
    for await (const num of contadorAsincrono()) {
        console.log(num); // Se imprimen 0, 1, 2 con 1 segundo de intervalo
    }
})(); */


// Ejemplo
/* async function* fetchPaginas(urlBase, resultados) {
    for (let i=1; i<=resultados; i++) {
        const respuesta = await fetch(`${urlBase}/${i}`);        
        const datos = await respuesta.json();
        yield datos;
    }
}
// Uso del generador para consumir la API de manera eficiente
(async () => {
    for await (const datos of fetchPaginas('https://jsonplaceholder.typicode.com/users', 10)) {
    console.log(datos);
}
})(); */


// Para leer archivos
/* async function* leerArchivo(archivo) {
    const lector = archivo.stream().getReader();
    const decodificador = new TextDecoder();
    let { value, done } = await lector.read();
    while (!done) {
        yield decodificador.decode(value);
        ({ value, done } = await lector.read());
    }
}
// Uso del generador con un archivo
(async () => {
    const archivo = new File(["Primera línea\nSegunda línea\n"], "ejemplo.txt");
    for await (const linea of leerArchivo(archivo)) {
        console.log(linea); // Imprime línea por línea
    }
})(); */

// Para leer websockets
/* async function* recibirMensajes(socket) {
    while (true) {
        yield new Promise(resolve => socket.onmessage = event => resolve(event.data));
    }
}
// Uso del generador con WebSockets
const socket = new WebSocket('https://echo.websocket.org/.ws');
(async () => {
    for await (const mensaje of recibirMensajes(socket)) {
        console.log('Mensaje recibido:', mensaje);
    }
})(); */

// IMPORTS y EXPORTS de Módulos
/* import { sumar, Calculadora } from "./matematica.js";
import funcionSuma from "./funcionSuma.js";

let resultadoSuma = sumar(10, 20);
let resultadoCalculadora = Calculadora.multiplicar(20, 30);
let resultadoSuma2 = funcionSuma(20, 30);
console.log(resultadoSuma);
console.log(resultadoCalculadora);
console.log(resultadoSuma2); */

// Import asíncrono
/* import('./matematica.js')
.then(modulo => {
    console.log(modulo.sumar(20, 30));
})
.catch(error => console.error('Error al cargar el módulo:', error));  */

/* document.getElementById("btnSumar").addEventListener("click", async () => {
    const { sumar } = await import("./matematica.js");
    let campoValor1 = parseFloat(document.getElementById("valor1").value);
    let campoValor2 = parseFloat(document.getElementById("valor2").value);
    let campoResultado = document.getElementById("resultado");
    campoResultado.value = sumar(campoValor1, campoValor2);
}); */


// Manipulación avanzada de objetos y funciones
// Declaración de un Objeto
/* const bebida = {id:1, nombre:"Coca Cola", precio:3000};
bebida.nombre = "Pepsi"
bebida.precio = "tres mil"
console.log(bebida.nombre);
console.log(bebida.precio); */

// Objeto Proxy
/* const handler = {
    get(target, prop) {
        return prop in target ? target[prop] : `La propiedad "${prop}" no existe`;
    }
};
const bebida = {id:1, nombre:"Coca Cola", precio:3000};
//console.log(bebida.descripcion); // undefined
const proxyBebida = new Proxy(bebida, handler);
console.log(proxyBebida.nombre); // "Coca Cola"
console.log(proxyBebida.apellido); // "La propiedad 'apellido' no existe"
console.log(proxyBebida.descripcion); // "La propiedad 'descripcion' no existe" */

// Get
/* const proxyDatos = new Proxy(
    { nombre: "Sofía", edad: 25 },
    { get: (target, prop) => (console.log(`Accediendo a la propiedad: ${prop}`), target[prop]) }
);
console.log(proxyDatos.nombre); // "Accediendo a la propiedad: nombre" → "Sofía" */

// Set
/* const proxyUsuario = new Proxy(
    { nombre: "Luis" },
    { set: (target, prop, value) => typeof value !== "string" ? console.log(`Error: El valor de ${prop} debe ser una cadena`) : target[prop] = value}
);
//proxyUsuario.nombre = 123; // "Error: El valor de nombre debe ser una cadena"
proxyUsuario.nombre = "Carlos";
console.log(proxyUsuario.nombre); // "Carlos */

// Has
/* const handler = {
    has(target, prop) {
        return prop in target ? true : false;
    }
};
const persona = { nombre: "María", edad: 40 };
const proxyPersona = new Proxy(persona, handler);
console.log("nombre" in proxyPersona); // true
console.log("apellido" in proxyPersona); // false */

// DeleteProperty
/* const proxyPersona = new Proxy(
    { nombre: "Sara", edad: 28 },
    { deleteProperty: (target, prop) => prop in target ? (console.log(`Eliminando propiedad: ${prop}`), delete target[prop], true) : (console.log(`No se puede eliminar: ${prop}, no existe`), false)}
);
console.log(proxyPersona.nombre); // Sara
delete proxyPersona.nombre; // "Eliminando propiedad: nombre"
//delete proxyPersona.apellido; // "No se puede eliminar: apellido, no existe
console.log(proxyPersona.nombre); // undefined  */

// Reflect
/* const handler = {
    get(target, prop, receiver) {
        console.log(`Accediendo a la propiedad: ${prop}`);
        return Reflect.get(target, prop, receiver); // Mantiene el comportamiento original
    },
    set(target, prop, value, receiver) {
        console.log(`Modificando la propiedad: ${prop}`);
        return Reflect.set(target, prop, value, receiver);
    }
};
const persona = { nombre: "Andrés", edad: 35 };
const proxyPersona = new Proxy(persona, handler);
console.log(proxyPersona.nombre); // "Accediendo a la propiedad: nombre" → "Andrés"
proxyPersona.edad = 40; // "Modificando la propiedad: edad"
console.log(proxyPersona.edad); // 40 */

/* const persona = { nombre: "Elena", edad: 22 };
console.log(Reflect.get(persona, "nombre")); // "Elena"
console.log(Reflect.get(persona, "apellido")); // undefined */

// Has
/* const usuario = { nombre: "Lucas" };
console.log(Reflect.has(usuario, "nombre")); // true
console.log(Reflect.has(usuario, "apellido")); // false */

// deleteProperty
/* const objeto = { a: 1, b: 2 };
Reflect.deleteProperty(objeto, "a");
console.log(objeto); // { b: 2  */

// Currificación
/* const sumar = (a) => (b) => (c) => a + b + c;
console.log(sumar(2)(3)(4)); // 9 */

// Reutilización de funciones
/* const multiplicar = (a) => (b) => (c) => (a * b * c);
const multiplicarPor2 = multiplicar(2);
console.log(multiplicarPor2(3)(4)); */

/* const filtrarPor = (prop) => (valor) => (obj) => obj[prop] === valor;
const usuarios = [
    { nombre: "Ana", edad: 30 },
    { nombre: "Carlos", edad: 25 },
    { nombre: "Elena", edad: 30 }
];
const filtrarPorEdad30 = filtrarPor("edad")(30);
console.log(usuarios.filter(filtrarPorEdad30));
// [{ nombre: "Ana", edad: 30 }, { nombre: "Elena", edad: 30 }] */

// Descurrificación
/* const sumaCurried = (a) => (b) => a + b;
const sumaNormal = (a, b) => sumaCurried(a)(b);
console.log(sumaNormal(2, 3)); // 5 */

// Objeto this
/* console.log(this); */

// Modo estricto
/* "use strict";
console.log(this); */

// Propiedad this en objetos
/* const persona = {
    nombre: "María",
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};
persona.saludar(); // "Hola, soy María" */

// Propiedad this en funciones
/* function mostrarNombre() {
    console.log(this);
}
mostrarNombre(); // window (en navegadores) o global (en Node.js) */

"use strict";
function mostrarNombre() {
    console.log(this);
}
mostrarNombre(); // undefined