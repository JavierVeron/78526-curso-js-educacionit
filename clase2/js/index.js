const contenedor = document.getElementById("contenedor");
const encabezado = document.getElementById("encabezado");
const parrafo = document.getElementById("parrafo");
const curso = document.getElementById("curso");
/* console.log(contenedor);
console.log(contenedor.nodeType);
console.log(contenedor.nodeName);
console.log(contenedor.nodeValue);
console.log(contenedor.innerHTML); */
/* console.log(encabezado);
console.log(encabezado.nodeType);
console.log(encabezado.nodeName);
console.log(encabezado.nodeValue);
console.log(encabezado.innerHTML); */
/* console.log(parrafo);
console.log(parrafo.nodeType);
console.log(parrafo.nodeName);
console.log(parrafo.nodeValue);
console.log(parrafo.innerHTML); */
/* console.log(curso);
console.log(curso.nodeType);
console.log(curso.nodeName);
console.log(curso.nodeValue);
console.log(curso.innerHTML);
curso.innerHTML = "JavaScript Avanzado";
curso.className = "fw-bold bg-secondary p-2";
const nuevoParrafo = document.createElement("p");
nuevoParrafo.innerHTML = "Curso de <b>React JS</b>";
contenedor.appendChild(nuevoParrafo)
//parrafo.removeChild(curso); // Eliminando un elemento accediendo desde su padre
//curso.remove(); // Eliminando un elemento desde el mismo

//curso.className = "text-uppercase";
curso.classList.add("text-uppercase");
curso.classList.remove("bg-secondary"); */


// Asíncronía
/* console.log("Inicio del programa"); // proceso sincrónico

setTimeout(() => {
    console.log("Este mensaje aparece después de 3 segundos"); // proceso asíncrono
}, 3000);

setTimeout(() => {
    console.log("Este mensaje aparece después de 2 segundos");
}, 2000);

console.log("Fin del programa"); */


// Eventos en JS
const mostrarMensaje = () => {
    const encabezado = document.getElementById("encabezado");
    encabezado.innerHTML = "Curso de JS Avanzado";
}

const contenedor1 = document.getElementById("contenedor1");
const contenedor2 = document.getElementById("contenedor2");
// Opción #1 => addEventListener (evento)
//contenedor1.addEventListener("click", mostrarMensaje);
/* contenedor1.addEventListener("click", () => {
    const encabezado = document.getElementById("encabezado");
    encabezado.innerHTML = "Curso de JS Avanzado...";
}); */
// Opción #2 => onclick (propiedad)
//contenedor1.onclick = mostrarMensaje;
/* contenedor1.onclick = () => {
    const encabezado = document.getElementById("encabezado");
    encabezado.innerHTML = "Curso de JS Avanzado...";
} */


// Propagación de Eventos
/* document.body.onclick = () => {
    console.log("Click en el Body!");
}

contenedor1.addEventListener("click", () => {
    console.log("Click en Contenedor #1");
    contenedor1.classList.remove("bg-dark");
    contenedor1.classList.add("bg-light");
});

contenedor2.addEventListener("click", (e) => {
    //e.stopPropagation(); // Detiene la propagación
    e.stopImmediatePropagation(); // Detiene la propagación global
    console.log("Click en Contenedor #2");
}); */

/* const validarFormulario = (e) => {
    e.preventDefault(); // Detener la ejecución del formulario
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (email.value == "") {
        email.classList.add("is-invalid");
        return false;
    } else {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
    }

    if (password.value == "") {
        password.classList.add("is-invalid");
        return false;
    } else {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
    }

    console.log("Enviar Formulario!");
} */


// Eventos del Mouse
/* contenedor1.addEventListener("click", () => {
    console.log("Hiciste 1 click!");
}) */
contenedor1.addEventListener("dblclick", () => {
    console.log("Hiciste 2 clicks!");
})
contenedor1.addEventListener("mousedown", () => {
    console.log("Presionaste el botón del mouse!");
    contenedor1.classList.remove("bg-dark");
    contenedor1.classList.add("bg-light");
})
contenedor1.addEventListener("mouseup", () => {
    console.log("Soltaste el botón del mouse!");
    contenedor1.classList.remove("bg-light");
    contenedor1.classList.add("bg-dark");
})
contenedor1.addEventListener("mousemove", () => {
    console.log("Estás moviendo el mouse!");
})
contenedor1.addEventListener("mouseenter", () => {
    console.log("Ingresaste con el puntero del mouse!");
    contenedor1.classList.remove("bg-dark");
    contenedor1.classList.add("bg-light");
})
contenedor1.addEventListener("mouseleave", () => {
    console.log("Saliste con el puntero del mouse!");
    contenedor1.classList.remove("bg-light");
    contenedor1.classList.add("bg-dark");
})
