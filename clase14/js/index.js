//console.log("Hola Mundo!");

/* console.time();
console.info("Mensaje informativo");
console.warn("Mensaje de advertencia");
console.error("Mensaje de error");

const productos = [
    {id:1, nombre:"Coca Cola", precio:3000},
    {id:2, nombre:"Pepsi", precio:2900},
    {id:3, nombre:"Coca Cola Zero", precio:3100},
    {id:4, nombre:"Pepsi Black", precio:3000}
];
console.log(productos);
console.table(productos);

const producto = {id:1, nombre:"Coca Cola", precio:3000};
console.log(producto);
console.table(producto);

//for(let i=0; i<100000; i++) {
    console.log(i);
//}

console.timeEnd(); */


// Depurando código
/* function sumar(a, b) {
    let resultado = a + b;
    return resultado;
}

let total = sumar(4, 5); // Colocar breakpoint aquí
console.log("Total:", total); */


// Consumo de Red
/* fetch("https://jsonplaceholder.typicode.com/users/10")
.then(res => res.json())
.then(data => console.log(data)) */


// Medidor de Rendimiento
/* function tareaPesada() {
    let inicio = Date.now();
    while (Date.now() - inicio < 20000) {} // Pausa de 20 segundos
}
tareaPesada(); */


// Creando un cookie
//document.cookie = "nombre=Federico; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
//document.cookie = "apellido=Calvar; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

//console.log(document.cookie);

// Para leer una cookie
/* function leerCookie(nombre) {
    let cookies = document.cookie.split("; ");
    for (let c of cookies) {
        let [clave, valor] = c.split("=");
        if (clave === nombre) return valor;
    }
    return null;
}
console.log(leerCookie("nombre")); // "Federico" */

// Para eliminar una cookie
//document.cookie = "nombre=Federico; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
//document.cookie = "apellido=Calvar; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";


// localStorage y sessionStorage
// Crear una localstorage
//localStorage.setItem("nombre", "Federico");
//localStorage.setItem("apellido", "Calvar");
// Crear una sessionStorage
//sessionStorage.setItem("nombre", "Federico");
//sessionStorage.setItem("apellido", "Calvar");
// Acceder a los datos
//const nombre = localStorage.getItem("nombre");
//console.log(nombre);
// Eliminar una localStorage
//localStorage.removeItem("nombre");
// Eliminar todas las localStorage
//localStorage.clear();

// Que pasa con los objetos y arrays?
// Para objetos y arrays debemos utlizar la función JSON.stringfify (para guardar) y JSON.parse(para leer)
/* const producto = {id:1, nombre:"Coca Cola", precio:3000};
localStorage.setItem("producto", JSON.stringify(producto));
const productoResultado = JSON.parse(localStorage.getItem("producto"));
console.log(productoResultado);
console.log(productoResultado.nombre); */

/* const productos = [
    {id:1, nombre:"Coca Cola", precio:3000},
    {id:2, nombre:"Pepsi", precio:2900},
    {id:3, nombre:"Coca Cola Zero", precio:3100},
    {id:4, nombre:"Pepsi Black", precio:3000}
];
localStorage.setItem("productos", JSON.stringify(productos));
const productosResultado = JSON.parse(localStorage.getItem("productos"));
console.log(productosResultado);
console.log(productosResultado[1]); */


// IndexedDB
// 1. Abrir o crear la base de datos
/* const request = indexedDB.open("TareasDB", 1); */

// 2. Crear almacenes e índices si es una nueva versión
/* request.onupgradeneeded = function(event) {
    const db = event.target.result;
    const store = db.createObjectStore("tareas", { keyPath: "id" });
    store.createIndex("porEstado", "estado"); // índice secundario
}; */

// 3. Agregar datos
/* request.onsuccess = function(event) {
    const db = event.target.result;
    const tx = db.transaction("tareas", "readwrite");
    const store = tx.objectStore("tareas");
    store.add({ id: 1, titulo: "Desayunar", estado: "completado" });
    store.add({ id: 2, titulo: "Trabajar", estado: "pendiente" });
    store.add({ id: 3, titulo: "Estudiar", estado: "pendiente" });
}; */

// Consultando datos
/* request.onsuccess = function(event) {
    const db = event.target.result;
    const tx = db.transaction("tareas", "readonly");
    const store = tx.objectStore("tareas");
    const index = store.index("porEstado");
    const solicitud = index.getAll("pendiente");
    solicitud.onsuccess = function() {
        console.log(solicitud.result); // Todas las tareas pendientes
    };
}; */