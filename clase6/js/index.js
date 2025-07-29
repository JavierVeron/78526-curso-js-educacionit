// Cómo capturar datos de una Formulario
// Opción #1 => Utilizando getElementById o QuerySelector
/* const validarFormulario = () => {
    // Capturando datos con getElementById (1.a)
    const email = document.getElementById("email")
    console.log("Email: ", email.value);
    const clave = document.getElementById("clave")
    console.log("Clave: ", clave.value);

    // Capturando datos con querySelector (1.b)
    const email = document.querySelector("#email")
    console.log("Email: ", email.value);
    const clave = document.querySelector(".campo")
    console.log("Clave: ", clave.value);
} */

// Opción 2 => Utilizando FormData
/* const form = document.querySelector('#form1')

form.addEventListener('submit', e => {
    e.preventDefault()    
    const data = new FormData(form)
    //repreContenidoFormData(data)
    //console.log(data.get("email"))
    //console.log(data.get("clave"))
    data.append("title", "Remera Blanca");
    data.append("price", 16);
    data.append("description", "Remera Blanca de algodón");
    console.log(data);
    
    fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: data, // No es necesario establecer Content-Type
    })
    .then(response => response.json())
    .then(data => console.log("Respuesta del servidor:", data))
    .catch(error => console.error("Error en la solicitud:", error));

    // Iterar claves y valores
    console.log("// Iterar claves y valores");
    for (let [clave, valor] of data.entries()) {
        console.log(`${clave}: ${valor}`);
    }

    // Iterar solo las claves
    console.log("// Iterar solo las claves");
    for (let clave of data.keys()) {
        console.log("Campo:", clave);
    }

    // Iterar solo las valores
    console.log("// Iterar solo los valores");
    for (let valor of data.values()) {
        console.log("Valor:", valor);
    }
    
    form.reset()
}) */

/* function repreContenidoFormData(data) {
    const keys = data.keys()
    const values = data.values()
    do {
        let clave = keys.next()
        let valor = values.next()
        if(clave.done || valor.done) break
            console.log(clave.value, valor.value)
    }
    while(true)
} */


// Manejo avanzado de Fetch
// Obtener el objeto stream
/* fetch('https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar')
.then(response => response.body)
.then(stream => {
    console.log(stream);
}); */

// Obtener el tamaño del archivo
/* fetch('https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar')
.then(response => {
    const contentLength = response.headers.get('Content-Length');
    console.log(`Tamaño total: ${contentLength} bytes`);
    console.log(`Tamaño total: ${Math.round(contentLength/1024)} Kbytes`);
}); */

// Crear un read para obtener los datos por fragmentos
/* fetch('https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar')
.then(response => {
    const reader = response.body.getReader();
    console.log(reader.read());
}); */

// Cómo cancelar una solicitud de Fetch
/* const controller = new AbortController();
controller.abort();
const signal = controller.signal;
fetch('https://fakestoreapi.com/products', {signal})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error('Error:', err)); */

// Cómo cancelar una solicitud de Fetch en un tiempo determinado
/* const controller = new AbortController();
const signal = controller.signal;
setTimeout(() => {
    controller.abort()
}, 50);

fetch('https://fakestoreapi.com/products', {signal})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.error('Error:', err)); */


// Cors
// Bloqueado por Cors
/* fetch('https://static.educacionit.com/educacionit/assets/course-syllabus-vector.svg')
.then(response => console.log(response.body))
.catch(error => console.error('Error:', error)); */
// No bloqueado
/* fetch('https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar')
.then(response => console.log(response.body))
.catch(error => console.error('Error:', error)); */


// Objeto URL
/* const url = new URL("https://vcp.com.ar/collections/remerassinestampa?sort_by=manual&filter.v.price.gte=&filter.v.price.lte=&filter.v.option.size=M&filter.v.option.size=L");
console.log(url);
const params = url.searchParams;
console.log(params);

// Cómo eliminar parámetros de mi url
url.searchParams.delete("filter.v.price.gte");
url.searchParams.delete("filter.v.price.lte");
console.log(url.toString());

// Recorrer cada uno de los parámetros
for (let [clave, valor] of url.searchParams) {
    console.log(`${clave}: ${valor}`);
}

// Agregando parámetros a la URL
url.searchParams.set('filter.v.price.gte', "");
url.searchParams.set('filter.v.price.lte', 20000);
console.log(url.toString()); */


// Objeto History
/* console.log(window.history);
//window.history.foward();
//window.history.back();
//history.pushState({page:1}, "Pagina 1", "/pagina1")

// Objeto Location
setTimeout(() => {
    // Asignar una nueva url
    //location.assign("https://vcp.com.ar/collections/remerassinestampa");
    
    // Reemplazar la url actual
    //location.replace("https://vcp.com.ar/collections/remerassinestampa");
    
    // Redireccionar
    //location.href = "https://vcp.com.ar/collections/remerassinestampa"
}, 2000) */


// Plantilla literal o template string
const producto = {id:1, nombre:"Remera Over Fylo Crudo", precio:42990, imagen:"https://vcp.com.ar/cdn/shop/files/Crudo1_29164484-cfa5-4f9e-9f7b-415fb05a2aa5.jpg?v=1741373160&width=700"}
let mensaje1 = producto.id + "- " + producto.nombre + "\n$" + producto.precio; // Concatenación de string
let mensaje2 = `${producto.id}- ${producto.nombre}
$${producto.precio}`; // Plantilla literal
console.log(mensaje1);
console.log(mensaje2);
