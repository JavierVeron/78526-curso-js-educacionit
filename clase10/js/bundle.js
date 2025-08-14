"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _class;
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
// Operador Rest y Spread
// Spread en Objetos
/* const bebida = {id:1, nombre:"Coca Cola", precio:3000};
const bebida2 = bebida; // No tengo una copia, tengo la referencia al objeto bebida
bebida.precio = 5000;
console.log(bebida);
console.log(bebida2);
// Solución rápida
const bebida3 = {azucar:true, ...bebida, id:10, categoria:"bebidas"}; // Crearme un nuevo objeto con las propiedades de bebida
bebida.precio = 4000;
console.log(bebida); //4000
console.log(bebida3); //5000 */
// Spread en Array
/* const bebidas = ["Coca Cola", "Pepsi", "Sprite"];
const bebidas2 = bebidas;
bebidas[2] = "Seven Up";
console.log(bebidas);
console.log(bebidas2);
const bebidas3 = ["Agua", ...bebidas, "Jugos"];
bebidas[2] = "Manaos";
console.log(bebidas);
console.log(bebidas3);
const bebidasCola = ["Coca Cola", "Pepsi", "Manaos"];
const bebidasLimaLimon = ["Sprite", "Seven Up"];
const totalBebidas = [...bebidasCola, ...bebidasLimaLimon];
console.log(totalBebidas); */
// Concat
/* const perros = ["Mora"];
const gatos = ["Amy", "Benita"];
//const mascotas = gatos.concat(perros);
const mascotas = perros.concat(gatos);
console.log(mascotas); */
// Spread en desestructuración
/* const [primero, segundo, ...resto] = [10, 20, 30, 40, 50];
console.log(primero); // 10
console.log(segundo); // 20
console.log(resto); // [30, 40, 50] */

// Operador Rest
/* function sumar(val1, val2) {
    return val1+val2;
} */
/* function sumar(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}
console.log(sumar(2, 5, 7)); // 14
console.log(sumar(10, 20, 30, 40)); // 100
console.log(sumar(5, 2)); // 7 */

// Ejemplo #2
/* function mostrarNombres(primerNombre, ...otrosNombres) {
    console.log(`Primer nombre: ${primerNombre}`);
    console.log(`Otros nombres: ${otrosNombres.join(', ')}`);
}
mostrarNombres("Ana", "Luis", "Carlos", "María", "Armando");
// Primer nombre: Ana
// Otros nombres: Luis, Carlos, María */

// Ejemplo #3
/* function procesarDatos(id, ...datos) {
    console.log(`ID: ${id}`);
    console.log(`Datos adicionales:`, datos);
}
procesarDatos(101, "Juan", "Gómez", 25, "Argentina");
// ID: 101
// Datos adicionales: [ 'Juan', 'Gómez', 25, 'Argentina' ] */

// Operador #4
/* class Calculadora {
    static multiplicar(factor, ...numeros) {
        return numeros.map(num => num * factor);
    }
}
console.log(Calculadora.multiplicar(2, 3, 5, 7)); // [6, 10, 14] */

// Variable Global
/* let nombre = "Ana"; // Variable global

function saludar() {
    console.log("Hola, " + nombre);
}

saludar(); // Hola, Ana
nombre = "Luis"; // Modificación de la variable global
saludar(); // Hola, Luis */

// Variable Local
/* function saludar() {
    let nombre = "Ana"; // Variable local
    console.log("Hola, " + nombre);
}

saludar(); // Hola, Ana
console.log(nombre); // No es posible acceder a una variable local */

// Ambito de bloque
/* if (true) {
    let mensaje = "[Dentro del bloque]"; // Variable con ámbito de bloque (local)
    console.log("Dentro del Bloque:", mensaje); // Dentro del bloque
}

console.log("Fuera del Bloque:", mensaje); // Error: mensaje no está definida fuera del bloque */

// Closure
/* function crearUsuario(nombre) {
    let saldo = 100000; // Variable privada dentro del closure
    
    return {
        mostrarSaldo: function() {
            console.log(`${nombre} tiene un saldo de $${saldo}`);
        },
        depositar: function(cantidad) {
            saldo += cantidad;
            console.log(`Depósito exitoso. Nuevo saldo: $${saldo}`);
        }
    };
}

const usuario1 = crearUsuario("Guilllermo");
usuario1.mostrarSaldo(); // Ana tiene un saldo de $1000
usuario1.depositar(50000); // Depósito exitoso. Nuevo saldo: $1500
usuario1.mostrarSaldo(); // Ana tiene un saldo de $1500
console.log(usuario1.saldo); // undefined (saldo es privado) */

// Mantener valores
/* function contarClicks() {
    let clicks = 0;
    
    return function() {
        clicks++;
        console.log(`Botón presionado ${clicks} veces`);
    };
}

const boton = document.getElementById("boton");
const manejarClick = contarClicks();
boton.addEventListener("click", manejarClick); */

// Crear funciones con new Function
// Defino una función con parámetros
/* const suma = new Function("a", "b", "return a + b");
console.log(suma(5, 3)); // 8 */

// Defino una función sin parámetros
/* const saludo = new Function("return 'Hola, mundo!';");
console.log(saludo()); // "Hola, mundo!" */

// Defino una función con varias lineas (template string)
//const calcularArea = new Function("base", "altura", "let area = base * altura;return 'El área es ' + area;"); // Si usamos comillas debe estar todo en la misma línea
/* const calcularArea = new Function("base", "altura", `
    let area = base * altura;
    return 'El área es ' + area;
`); // Si usamos varias lineas debemos usar el apóstrofe como si fuera una Plantilla Literal
console.log(calcularArea(5, 10)); // "El área es 50" */

// Aparentemente se puede acceder a variable globales
/* let mensaje = "Hola";
const miFuncion = new Function("return mensaje;");
console.log(miFuncion()); // Error: mensaje no está definido */

// Diferencias entre new Function, Function tradicional, Arrow Function
/* let mensaje = "Hola"; // variable global

function fnTradicional() { return mensaje; }
const fnArrow = () => mensaje;
const fnNueva = new Function("return mensaje"); // accede al ámbito externo

console.log(fnTradicional()); // "Hola"
console.log(fnArrow()); // "Hola"
console.log(fnNueva()); // Accede a la variable mensaje */

// Hoising
/* console.log(declarada()); // Funciona

function declarada() {
    return "Soy una función declarada";
}

//console.log(expresada()); // Error
const expresada = function() { return "Soy una función expresada"; };
//console.log(nueva()); // Error
const nueva = new Function("return 'Soy una new Function';");
console.log(expresada()); // "Soy expresada"
console.log(nueva()); // "Soy new Function" */

// Uso de la propiedad This
/* const objeto = {
    valor: 42,
    tradicional() { return this.valor; },
    arrow: () => this.valor,
    nueva: new Function("return this.valor;")
};

console.log(objeto);
console.log(objeto.tradicional()); // 42
console.log(objeto.arrow()); // undefined
console.log(objeto.nueva()); // 42 */

// Casos de uso
/* function crearCalculadora(expresion) {
    return new Function("return " + expresion + ";");
}

const calcular = crearCalculadora("5 * 10 + 2");
console.log(calcular()); // 52 */

/* function generarFuncion(operacion) {
    return new Function("a", "b", `return a ${operacion} b;`);
}
const suma = generarFuncion("+");
console.log(suma(3, 4)); // 7
const multiplicacion = generarFuncion("*");
console.log(multiplicacion(3, 4)); // 12 */

/* function ejecutarCodigo(entradaUsuario) {
    return new Function("return " + entradaUsuario + ";");
}
//console.log(ejecutarCodigo("2 + 2")()); // 4
// ⚠ Riesgo de seguridad: un atacante podría ejecutar código peligroso
console.log(ejecutarCodigo("console.log('Hackeado'); return 10")());
// "Hackeado", y no devuelve 10 porque es código inaccesible */

// Es posible acceder a variables globales
/* let claveSecreta = "12345";
const obtenerClave = new Function("return claveSecreta;");
console.log(obtenerClave()); // OK: claveSecreta está definida como variable global */

/* console.time("función tradicional");
function sumaTradicional(a, b) { return a + b; }
for (let i = 0; i < 1000000000; i++) sumaTradicional(2, 3);
console.timeEnd("función tradicional");

console.time("new Function");
const sumaDinamica = new Function("a", "b", "return a + b;");
for (let i = 0; i < 1000000000; i++) sumaDinamica(2, 3);
console.timeEnd("new Function"); */

// Decoradores de Funciones
/* function logExecution(fn) {
    return function (...args) {
        console.log(`Ejecutando ${fn.name} con argumentos:`, args);
        const result = fn(...args);
        console.log(`Resultado:`, result);
        return result;
    };
}

function suma(a, b) {
    return a + b;
}

const sumaDecorada = logExecution(suma);
sumaDecorada(4, 6); */

// Decorador para un Clase
/* const requireAdmin = (_, key, descriptor) => ({
    ...descriptor,
    value(...args) {
        return this.isAdmin ? descriptor.value.apply(this, args) : console.log(`Acceso denegado a ${key}`);
    }
});

class Usuario {
    constructor(nombre, isAdmin) {
        this.nombre = nombre;
        this.isAdmin = isAdmin;
    }
    @requireAdmin()
    eliminarUsuario() {
        console.log(`${this.nombre} ha eliminado un usuario.`);
    }
}
const usuario1 = new Usuario("Juan", false);
const admin = new Usuario("Ana", true);
usuario1.eliminarUsuario(); // Acceso denegado
admin.eliminarUsuario(); // Ana ha eliminado un usuario. */

// Decorador de Objetos
/* function defaultValue(value) {
    return function (target, key) {
        let _val = value;
        Object.defineProperty(target, key, {
                get: () => _val,
                set: (newValue) => {
                console.log(`Modificando ${key}: ${_val} → ${newValue}`);
                _val = newValue;
            },
        });
    };
}

class Config {
    @defaultValue(10) maxIntentos() {
        console.log("hola");
    };
}

const config = new Config();
console.log(config.maxIntentos); // 10
config.maxIntentos = 5; // Modificando maxIntentos: 10 → 5
console.log(config.maxIntentos); // 5 */

function log(target, key, descriptor) {
  console.log("Logging ".concat(key, " function"));
  return descriptor;
}
var Example = (_class = /*#__PURE__*/function () {
  function Example() {
    _classCallCheck(this, Example);
  }
  return _createClass(Example, [{
    key: "greet",
    value: function greet() {
      console.log("Hello, world!");
    }
  }]);
}(), _applyDecoratedDescriptor(_class.prototype, "greet", [log], Object.getOwnPropertyDescriptor(_class.prototype, "greet"), _class.prototype), _class);
var ejemplo = new Example();
ejemplo.greet();
