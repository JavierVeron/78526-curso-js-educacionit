// Funciones flechas revisadas
// Opción #1 => Función tradicional
/* function saludar() {
    console.log("Hola Mundo!");
} */
// Opción #2 => Función anónima
/* const saludar = function() {
    console.log("Hola Mundo!");
} */
// Opción #3 => Función flecha
/* const saludar = () => {
    console.log("Hola Mundo!");
} */


/* class Usuario {
    constructor(nombre) {
        this.nombre = nombre; //propiedad
    }
    saludar = () => console.log(`Hola, soy ${this.nombre}`); //propiedad que ejecuta un función
    saludar2() { //método
        console.log(`Hola, soy ${this.nombre}`);
    }
}

const usuario = new Usuario("Ana");
usuario.saludar(); // "Hola, soy Ana"
usuario.saludar2(); // "Hola, soy Ana" */

// Función flecha con parámetros variables (operador rest)
/* const sumarTodo = (...numeros) => numeros.reduce((acc, num) => acc + num, 0);
console.log(sumarTodo(1, 2, 3, 4)); // 10 */

// No se puede usar las arrow functions como constructores
//const Persona = (nombre) => { this.nombre = nombre };
//const p = new Persona("Luis"); // ❌ Error: Persona is not a constructor

// Con la función tradicional se puede utilizar como constructor
/* function Persona2(nombre) {
    this.nombre = nombre
}
const q = new Persona2("Luis");
console.log(q); */

// Mas simple implementar arrow functions
//setTimeout(() => console.log("Hola después de 5 segundos"), 5000); // se ejecuta de forma asíncrona

// Filtrado y transformación
/* const numeros = [1, 2, 3, 4];
const cuadrados = numeros.map(n => n * n);
console.log(cuadrados); // [1, 4, 9, 16]

const nombres = ["Juan", "Pedro", "María"];
const nombresMayus = nombres.map(item => item.toUpperCase());
console.log(nombresMayus); // ["JUAN", "PEDRO", "MARÍA"] */

/* const obj = {
    nombre: "Juan",
    saludar: () => console.log(`Hola, soy ${this.nombre}`) // ❌ this es undefined
};
obj.saludar(); // "Hola, soy undefined" */

// IIFE
/* (function() {
    console.log("Esta función se ejecuta inmediatamente");
})();

(() => {
    console.log("Esta función se ejecuta inmediatamente #2");
})(); */

// IIFE con scope
/* (function() {
    let mensaje = "Hola desde IIFE"; // variable local
    console.log(mensaje); // 👍🏻 funciona
})();
//console.log(mensaje); // ❌ Error: mensaje no está definido */

// IIFE con parámetros
/* (function(nombre) {
    console.log("Hola, soy " + nombre); // 👍🏻 funciona
})("Armando"); */


// Modo estricto
/* "use strict";
x = 10; // ❌ Error: x no está declarada
console.log(x); */

/* "use strict";
const persona = { nombre: "Ana", nombre: "Luis" };
console.log(persona); */

/* "use strict";
function mostrar() {
    console.log(this); // undefined en lugar del objeto global
}
mostrar(); */

// Es posible declarar y ejecutar una función en modo estricto
/* (function() {
    "use strict";
    let mensaje = "Modo estricto activado en esta IIFE";
    console.log(mensaje);
})(); */


// Prototipos y Clases
/* const persona = {
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}; */

/* persona.nombre = "Ivan";
persona.saludar();
persona.nombre = "María";
persona.saludar(); */
/* const usuario = Object.create(persona);
usuario.nombre = "Ivan";
usuario.saludar();
const usuario2 = Object.create(persona);
usuario2.nombre = "María";
usuario2.saludar();

console.log(usuario);
console.log(usuario.__proto__ === persona); // true
console.log(Object.getPrototypeOf(usuario)); // persona */


// Funciones constructoras
/* function Persona(nombre) {
    this.nombre = nombre;
    this.saludar2 = function() {
        console.log(`Hola, soy ${this.nombre} #2`);
    };
}

Persona.prototype.saludar = function() {
    console.log(`Hola, soy ${this.nombre}`);
}; */

//const juan = new Persona("Juan");
//console.log(juan);
//juan.saludar(); // "Hola, soy Juan"
//juan.saludar2(); // "Hola, soy Juan"

// Herencia con prototipos
/* function Estudiante(nombre, carrera) {
    Persona.call(this, nombre); // Llama al constructor de Persona
    this.carrera = carrera;
}

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;
Estudiante.prototype.estudiar = function() {
    console.log(`${this.nombre} estudia ${this.carrera}`);
};

const pedro = new Estudiante("Pedro", "Ingeniería");
pedro.saludar(); // "Hola, soy Pedro"
pedro.estudiar(); // "Pedro estudia Ingeniería" */

// Clases
/* class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre; // propiedades
        this.edad = edad;
        this.estadoCivil = "soltero/a";
    }
    
    saludar() { // método
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años. (${this.estadoCivil})`);
    }

    casar() {
        this.estadoCivil = "casado/a";
    }
}

const ana = new Persona("Ana", 25); //instanciando o creando una nueva instancia de la clase Persona
ana.casar();
ana.saludar(); // "Hola, soy Ana y tengo 25 años.

const juan = new Persona("Juan", 30);
juan.saludar(); // "Hola, soy Juan y tengo 30 años. */

// Propiedades y métodos estáticos (no hace falta instanciar)
/* class Utilidades {
    static sumar(a, b) {
        return a + b;
    }
}

console.log(Utilidades.sumar(4, 5)); // 9 */

// Getters y Setters
/* class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this._edad = edad;
    }
    get edad() { return this._edad; }
    set edad(nuevaEdad) {
        nuevaEdad > 0 ? this._edad = nuevaEdad : console.log("La edad debe ser un número positivo.");
    }
}
const juan = new Persona("Juan", 30);
console.log(juan);
juan.nombre = "Pedro";
console.log(juan); // Pedro como nombre
juan.edad = 35;
console.log(juan.edad);
juan.edad = -5;
console.log(juan); */

/* class Circulo {
    constructor(radio) {
        this.radio = radio;
    }
    get diametro() {
        return this.radio * 2;
    }
    get area() {
        return Math.PI * this.radio ** 2;
    }
}
const c = new Circulo(5);
console.log(c.diametro); // 10
console.log(c.area.toFixed(2)); // 78.54 */

/* class CuentaBancaria {
    constructor(saldo) {
        this._saldo = saldo;
    }

    get saldo() {
        return `$${this._saldo}`;
    }

    set saldo(nuevoSaldo) {
        if (nuevoSaldo >= 0) {
            this._saldo = nuevoSaldo;
        } else {
            console.log("Error: El saldo no puede ser negativo.");
        }
    }
}

const cuenta = new CuentaBancaria(1000);
console.log(cuenta.saldo); // "$1000"
cuenta.saldo = 2000;
console.log(cuenta.saldo); // "$2000"
cuenta.saldo = -500; // "Error: El saldo no puede ser negativo. */

/* class Configuracion {
    static _modo = "ligero";
    static get modo() {
        return this._modo;
    }
    static set modo(nuevoModo) {
        if (["ligero", "oscuro"].includes(nuevoModo)) {
            this._modo = nuevoModo;
        } else {
            console.log("Modo no válido.");
        }
    }
}
console.log(Configuracion.modo); // "ligero"
Configuracion.modo = "oscuro";
console.log(Configuracion.modo); // "oscuro"
Configuracion.modo = "azul"; // "Modo no válido." */

// Crear una Clase y heredar Propiedades y Métodos de otra Clase
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, carrera) {
        super(nombre);
        this.carrera = carrera;
    }
    estudiar() {
        console.log(`${this.nombre} estudia ${this.carrera}`);
    }
}

/* const maria = new Estudiante("María", "Matemáticas");
maria.saludar();
maria.estudiar(); */

// Sobrescritura de Métodos
/* class Empleado extends Persona {
    saludar() { // crear el método saludar (sino existe lo crea y si existe de la clase padre te lo sobrescribe)
        console.log(`Hola, soy ${this.nombre} y soy empleado.`);
    }
}

const emp = new Empleado("Peter");
emp.saludar(); */

// Llamando Métodos de una Clase Padre
/* class Profesor extends Persona {
    saludar() {
        super.saludar();
        console.log("Soy profesor/a.");
    }
}
const ana = new Profesor("Ana");
ana.saludar();
// "Hola, soy Ana"
// "Soy profesor." */


// Gestión de Propiedades y Métodos en Clases
// Sin propiedades estática
/* class Config {
    constructor() {
        this.version = "1.0.0";
    }
}
const aa = new Config();
console.log(aa.version); // "1.0.0" */

// Con propiedades estática
/* class Config {
    static version = "1.0.0";
}
console.log(Config.version); // "1.0.0" */

// Clase con Propiedades y Propiedades estáticas
/* class Usuario {
    static totalUsuarios = 0;

    constructor(nombre) {
        this.nombre = nombre;
        Usuario.totalUsuarios++; // Incrementa la propiedad estática
    }

    static obtenerTotalUsuarios() {
        return `Usuarios creados: ${this.totalUsuarios}`;
    }
}
const ana = new Usuario("Ana");
const pedro = new Usuario("Pedro");
console.log(Usuario.obtenerTotalUsuarios()); // "Usuarios creados: 2"
console.log(ana.nombre);
console.log(pedro.nombre); */

// Patrón Singleton
/* class Singleton {
    static instancia = null;
    static obtenerInstancia() {
        if (!this.instancia) {
            this.instancia = new Singleton();
        }
        return this.instancia;
    }
}
const obj1 = Singleton.obtenerInstancia();
const obj2 = Singleton.obtenerInstancia();
console.log(obj1 === obj2); // true (misma instancia) */


/* class Contador {
    static cuenta = 0; // Propiedad estática
    static incrementar() { // Método estático
        return ++this.cuenta;
    }
    static obtenerCuenta() {
    return `Total: ${this.cuenta}`;
    }
}
console.log(Contador.incrementar()); // 1
console.log(Contador.incrementar()); // 2
console.log(Contador.incrementar()); // 3
console.log(Contador.obtenerCuenta()); // "Total: 3" */

/* class Configuracion {
    static tema = "oscuro";
    static idioma = "es";
    static cambiarTema(nuevoTema) {
        this.tema = nuevoTema;
    }
    static mostrarConfig() {
        return `Tema: ${this.tema}, Idioma: ${this.idioma}`;
    }
}
console.log(Configuracion.mostrarConfig()); // "Tema: oscuro, Idioma: es"
Configuracion.cambiarTema("claro");
console.log(Configuracion.mostrarConfig()); // "Tema: claro, Idioma: es
console.log(Configuracion); */


// Propiedades y Método privados y protegidos
/* class Usuario {
    #clave; // propiedad privada (no se puede acceder desde afuera)
    constructor(nombre, clave) {
        this.nombre = nombre;
        this.#clave = clave;
    }
    #encriptarClave = () => `***${this.#clave}***`; // método privado (no se puede acceder desde afuera)
    obtenerClaveSegura = () => this.#encriptarClave();
}

const user = new Usuario("Ana", "12345");
console.log(user.nombre); // "Ana"
console.log(user.clave); // "Ana"
console.log(user.obtenerClaveSegura()); // "***12345***" */

// Propiedad y Métodos protegidos (_)
/* class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this._salario = salario; // Propiedad "protegida"
    }
    mostrarSalario() {
        return `El salario de ${this.nombre} es ${this._salario}`;
    }
}
const e1 = new Empleado("Carlos", 3000);
console.log(e1.mostrarSalario()); // "El salario de Carlos es 3000"
console.log(e1._salario); // ⚠ No recomendado, pero posible */


class CuentaBancaria {
    #saldo;
    constructor(titular, saldo) {
        this.titular = titular;
        this.#saldo = saldo;
    }
    depositar = (monto) => this.#saldo += monto;
    obtenerSaldo = () => `Saldo disponible: $${this.#saldo}`;
}

class CuentaPremium extends CuentaBancaria {
    constructor(titular, saldo, limite) {
        super(titular, saldo);
        this._limite = limite;
    }
    mostrarLimite = () => `Límite de crédito: $${this._limite}`;
}

const cuenta = new CuentaPremium("Luis", 5000, 10000);
console.log(cuenta.obtenerSaldo());
console.log(cuenta.mostrarLimite());