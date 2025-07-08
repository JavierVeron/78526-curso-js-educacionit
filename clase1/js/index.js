// BOM
/* window.navigator.geolocation.getCurrentPosition((posicion) => {
    // Obtiene la posición geográfica actual
    console.log(posicion);
    console.log("X: " + posicion.coords.latitude);
    console.log("Y: " + posicion.coords.longitude);
}) */

/* window.navigator.clipboard.writeText('Esto se copiará al portapapeles');
window.navigator.clipboard.readText(); */

/* window.onload = function() {
    // El evento OnLoad sirve para
    // ejecutar código al cargarse la página
    console.log("Hola Mundo!");
    //modificarEncabezado();
}

function modificarEncabezado() {
    const encabezado = document.getElementById("encabezado");
    encabezado.innerHTML = "Curso de JS Avanzado!"
} */


// DOM
// getElementById => Devuelve un único elemento html
/* const encabezado = document.getElementById("encabezado");
const parrafo = document.getElementById("parrafo1");
console.log(parrafo);
console.log(parrafo.title);
parrafo.title = "Educación IT"
parrafo.innerHTML = "Curso de <b>JS Avanzado</b>"
console.log(parrafo.title);
parrafo.className = "alert alert-primary p-5 text-center display-6"; */

// getElementsByClassName y getElementsByTagName
// Busca elementos por Nombre de Clase
//const parrafos = document.getElementsByClassName("curso");
// Busca elementos por Nombre de Etiqueta
/* const parrafos = document.getElementsByTagName("h1");
console.log(parrafos); */


// querySelector => Devuelve el primer elemento que coincida con la búsqueda (por nombre de clase, id o etiqueta)
// const parrafo = document.querySelector(".curso");
/* const parrafo = document.querySelector("p.curso.avanzado");
console.log(parrafo); */

// querySelectorAll Devuelve uno o más elementos html
/* const parrafos = document.querySelectorAll(".curso");
console.log(parrafos); */

// createElement => Permite crear elementos html
/* const nuevoParrafo = document.createElement("p")
const nuevoParrafo2 = document.createElement("p")
nuevoParrafo.innerHTML = "Nuevo Texto"
nuevoParrafo.id = "nuevoParrafo";
nuevoParrafo2.innerHTML = "Nuevo Texto #2"
nuevoParrafo.title = "Esto es un título"
nuevoParrafo.className = "fw-bold text-uppercase text-white bg-dark p-3"
const contenedor = document.getElementById("contenedor");
contenedor.appendChild(nuevoParrafo)
contenedor.appendChild(nuevoParrafo2) */

// createDocumentFragment
//const contenedor = document.getElementById("contenedor");
const names = ["susana", "andrea", "lorena"]
/* names.forEach(n => f.innerHTML += `<div>${n}</div>`)
document.getElementById("contenedor").appendChild(f) */

/* names.forEach(item => {
    const nombre = document.createElement("div")
    nombre.innerHTML = "<b>" + item + "</b>";
    contenedor.appendChild(nombre)
}) */


// innerHtml e innerText
/* const contenedor = document.getElementById("contenedor");
contenedor.innerText = "Esto es un <b>texto</b>";
contenedor.innerHTML = "Esto es un <b>texto</b>"; */

// Dataset
/* const data = { mostrar: false }
const el = document.querySelector("*[data-if]");
if(!data[el.dataset.if]) el.innerHTML = "" */

// setAttribue
const nombre = document.getElementById("nombre");
nombre.setAttribute("title", "Hola, cómo estás?")
const texto = nombre.getAttribute("title");
console.log(texto);
