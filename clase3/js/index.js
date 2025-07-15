// Eventos Drag & Drop
/* const hamburguesa = document.getElementById("hamburguesa");
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");

hamburguesa.addEventListener("dragstart", (event) => {
    console.log("Comienzas a arrastrar el elemento");
    event.target.style.opacity = "0.5";
})
hamburguesa.addEventListener("drag", () => {
    console.log("El elemento está siendo arrastrado");
})
hamburguesa.addEventListener("dragend", (event) => {
    console.log("Terminas de arrastrar el elemento");
    event.target.style.opacity = "1";
})
destino.addEventListener("dragover", (event) => {
    event.preventDefault(); // Evita que el navegador impida el "drop"
    console.log("Elemento arrastrado sobre el área de destino");
})
origen.addEventListener("drop", () => {
    origen.appendChild(hamburguesa)
    console.log("Suelto el elemento en el área de origen");
})
destino.addEventListener("drop", () => {
    destino.appendChild(hamburguesa)
    console.log("Suelto el elemento en el área de destino");
}) */


// Eventos teclados Keydown & Keyup
/* const email = document.getElementById("email");
const emailHelp = document.getElementById("emailHelp");
const maximoCaracteres = 10;

email.addEventListener("keydown", (e) => {
    if (calcularLongitud() > maximoCaracteres) {
        return false;
    }
    console.log(e.code);
    console.log(e.key);
    
    console.log("Estás presionando una tecla!");
    emailHelp.innerHTML = calcularCantidadCaracteres();

})
email.addEventListener("keyup", () => {
    console.log("Estás soltando una tecla!");
})

const calcularLongitud = () => {
    const email = document.getElementById("email");
    
    return email.value.length + 1;
}

const calcularCantidadCaracteres = () => {
    const restan = maximoCaracteres - calcularLongitud();

    return restan + " caracteres";
} */


// Validación de Formulario
const validacionFormulario = (event) => {
    event.preventDefault(); // Detener el envío del Formulario
    const miFormulario = document.getElementById("miFormulario");
    
    if (!miFormulario.checkValidity()) {
        console.log("Error en el envío del Form!");
    }

    miFormulario.submit(); // Envio del Formulario desde JS
}