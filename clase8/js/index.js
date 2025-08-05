// Tipos de Datos Primitos (permite realizar copia por valor)
/* let valor1 = 123.23; // number (int y float)
console.log(valor1);
console.log(typeof(valor1));
let valor2 = "123"; // string
console.log(valor2);
console.log(typeof(valor2));
let valor3 = true; // booelan (true/false)
console.log(valor3);
console.log(typeof(valor3));
let valor4 = valor1;
valor1 = 10;
console.log(valor1);
console.log(valor4); */

// Valores especiales: Infinity y -Infinity
/* let infinitoPositivo = 1 / 0;
let infinitoNegativo = -1 / 0;
console.log(infinitoPositivo); // Salida: Infinity
console.log(infinitoNegativo); // Salida: -Infinity */

// NaN (Not-a-Number)
/* let resultadoInvalido = "hola" * 2;
console.log(resultadoInvalido); // Salida: NaN
// Verificación de NaN usando isNaN()
console.log(isNaN(resultadoInvalido)); // Salida: true */

// Operaciones matemáticas
/* let operacion1 = 10 / 2; // División
let operacion2 = 10 % 2; // Resto. Si el resto es igual a 0 es Par.
console.log(operacion1);
console.log(operacion2);
const numeros = [1, 2, 3, 4, 5];

for (const item of numeros) {
    let esPar = item % 2;

    if (esPar == 0) {
        console.log(item, "Es Par");
    } else {
        console.log(item, "Es Impar");
    }
}

let operacion3 = 2 ** 3;
console.log(operacion3); */

// Números aleatorios
/* let numero1 = Math.random(); // genera un random entre 0 y 1
let numero2 = Math.random() * 10; // genera un random entre 0 y 10
let numero3 = Math.round(numero2); // genera un random entre 0 y 10 y redondeo
let numero4 = Math.round(4.5); // A partir de .5 redondea para arriba
let numero5 = Math.floor(numero2); // Redondea para abajo
let numero6 = Math.ceil(numero2); // Redondea para arriba
console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(numero4);
console.log(numero5);
console.log(numero6);
let numero7 = Math.sqrt(16);
console.log(numero7); */

// ParseInt, ParseFloat y Number
/* let numero1 = parseInt(prompt("Ingrese un Número:"));
let numero2 = parseFloat(prompt("Ingrese otro Número:"));
let numero3 = numero1 ** numero2;
console.log(numero1, typeof(numero1));
console.log(numero2, typeof(numero2));
console.log("Resultado:", numero3);
let numero4 = Number("10.2");
console.log(numero4, typeof(numero4)); */


// String
/* let texto1 = " hola ";
console.log(texto1.length);
console.log(texto1.trim().length)
console.log(texto1.toUpperCase())
console.log(texto1.trimStart())
console.log(texto1.replace("o", "0").replace("a", "4")) */
/* for (const elemento of texto1) {
    console.log(elemento);
} */

/* let salida = "guillermo;lopez;30;BuenosAires;Argentina";
let salida2 = salida.split(";"); // Convertir un string a un array;
console.log(salida);
console.log(salida2);
console.log(salida2[1]);

let salida3 = ["guillermo", "lopez", 30];
let salida4 = salida3.toString(); // Convertir un array a un string
console.log(salida3);
console.log(salida4); */


// Arrays
const nombres = ["guillermo", "alejandro", "armando", "federico"];
// Push (agregar al final)
/* nombres.push("Juan");
console.log(nombres); */
// Pop (elimina y devuelve el último elemento)
/* let valor = nombres.pop();
console.log(nombres);
console.log(valor); */
// Unshift (agregar al principio)
/* nombres.unshift("Juan");
console.log(nombres); */
// Pop (elimina y devuelve el primer elemento)
/* let valor = nombres.shift();
console.log(nombres);
console.log(valor); */

const productos = [
    {id:1, nombre:"Coca Cola", precio:3000},
    {id:2, nombre:"Coca Zero", precio:3200},
    {id:3, nombre:"Pepsi", precio:2900},
    {id:4, nombre:"Pepsi Black", precio:3100},
    {id:5, nombre:"Manaos", precio:2500}
]

// Find (busca el primer elemento)
//const bebida = productos.find(item => item.nombre == "coca zero")
//const bebida = productos.find(item => item.id == 3)
/* const bebida = productos.find(item => item.precio > 3000)
console.log(bebida); */
// Filter (genera un nuevo array a partir de la condición)
//const bebidas = productos.filter(item => item.precio > 3000)
/* const bebidas = productos.filter(item => item.id != 5)
console.log(bebidas); */
// Splice (elimina elementos de un array)
/* productos.splice(2, 2);
console.log(productos); */
// Map (te genera un nuevo array)
//const productos2 = productos.map(item => ({id:item.id, name:item.nombre.toUpperCase(), price:item.precio*1.2}))
//const productos2 = productos.map(item => ({id:item.id, name:item.nombre.toUpperCase()}))
//const productos2 = productos.map(item => item.nombre)
/* const productos2 = productos.map(item => ([item.id, item.nombre]))
console.log(productos2); */
// Concat (concatena 2 arrays)
/* const productos2 = [
    {id:6, nombre:"Seven Up", precio:3000},
    {id:7, nombre:"Seven Up Free", precio:3200}
]
const productos3 = productos.concat(productos2);
console.log(productos3); */


// Map y Set
/* const conjunto = new Set([1, 2, 3, 4, 10]);
console.log(conjunto);
console.log(conjunto.entries());

for (const num of conjunto) {
    console.log(num); // 1, 2, 3
} */

/* const mapa = new Map([
    ["a", 1],
    ["b", 2]
]);
for (const [clave, valor] of mapa) {
    console.log(clave, valor); // a 1, b 2
} */


// Claves y Objetos
/* const usuario = {
    nombre: "Ana",
    edad: 25,
    activo: true
};
console.log(usuario);
console.log(usuario.nombre); // "Ana" */

/* const mapa = new Map();
mapa.set("nombre", "Carlos");
mapa.set("numero", 10);
mapa.set("años", 40);
console.log(mapa.get("nombre")); // "Carlos"
console.log(mapa.get("numero")); // 10
mapa.delete("numero");
mapa.delete("años");
console.log(mapa.size); // 2 */

/* const conjunto = new Set();
conjunto.add(1);
conjunto.add(2);
conjunto.add(3);
conjunto.add("hola");
conjunto.add(2); // Ignorado, ya existe
conjunto.delete("hola");
console.log(conjunto); // Set { 1, 2, 3 } */

const bebida = {id:1, nombre:"Coca Cola", precio:3000};

/* console.log(Object.keys(bebida));
for (const element of Object.keys(bebida)) {
    console.log(element);
}

console.log(Object.values(bebida));
for (const element of Object.values(bebida)) {
    console.log(element);
}

console.log(Object.entries(bebida));
for (const [clave, valor] of Object.entries(bebida)) {
    console.log(clave, valor);
} */


/* let name = bebida.nombre;
console.log(name);
let price = bebida.precio;
console.log(price); */
// Desestrucuración
/* let {nombre, precio} = bebida;
console.log(nombre);
console.log(precio); */
// Alias
/* let {nombre:name, precio:price} = bebida;
console.log(name);
console.log(price); */

/* const empleado = {
    nombre: "Carlos",
    puesto: "Desarrollador",
    direccion: { ciudad: "Bogotá", pais: "Colombia" }
};
const { direccion: { ciudad, pais } } = empleado;
console.log(ciudad, pais); // "Bogotá Colombia" */

// Desestructurando Arrays
/* const colores = ["rojo", "verde", "azul"];
/* const [primero, segundo] = colores;
console.log(primero); // "rojo"
console.log(segundo); // "verde" */
/* const [,segundo,tercero] = colores;
console.log(segundo); // "verde"
console.log(tercero); // "verde" */


// Desestructurando resto
/* const numeros = [1, 2, 3, 4, 5];
const [primero, segundo, ...resto] = numeros;
console.log(primero, segundo); // 1 2
console.log(resto); // [3, 4, 5] */


// Desestructurando funciones
const persona = {nombre:"Alejandro", apellido:"Miranda"}
const numeros = [5, 10, 15]

function saludar(objeto) {
    console.log(objeto.apellido + ", " + objeto.nombre);
}

function saludar2({nombre, apellido}) {
    console.log(apellido + ", " + nombre);
}

function sumar([...numeros]) {
    let resultado = 0;

    for (const elemento of numeros) {
        resultado += elemento
    }

    return resultado;  
}

saludar(persona);
saludar2(persona);
console.log(sumar(numeros));
console.log(sumar([2, 4]));
console.log(sumar([2, 4, 6, 8]));