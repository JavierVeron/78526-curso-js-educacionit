// Plantilla literal o template string
/* const producto = {id:1, nombre:"Remera Over Fylo Crudo", precio:42990, imagen:"https://vcp.com.ar/cdn/shop/files/Crudo1_29164484-cfa5-4f9e-9f7b-415fb05a2aa5.jpg?v=1741373160&width=700"}
let mensaje1 = producto.id + "- " + producto.nombre + "\n$" + producto.precio; // Concatenación de string
let mensaje2 = `${producto.id}- ${producto.nombre}
$${producto.precio}`; // Plantilla literal
console.log(mensaje1);
console.log(mensaje2);

const parrafo = document.getElementById("parrafo");
parrafo.innerHTML = mensaje2; */

// Renderizado de Productos
const productos = [
    {id:1, nombre:"Sweater Concept Negro", precio:79990, imagen:"https://vcp.com.ar/cdn/shop/files/Negra1_07a24ea4-13ea-4997-866c-5535ce73c497.jpg?v=1748611364&width=400"},
    {id:2, nombre:"Jean Falcon Acid Celeste", precio:64990, imagen:"https://vcp.com.ar/cdn/shop/files/AcidCeleste2.jpg?v=1741373774&width=400"},
    {id:3, nombre:"Buzo Over Cliff Negro", precio:69990, imagen:"https://vcp.com.ar/cdn/shop/files/BUZOCLIFFNEGRO6.jpg?v=1751028118&width=400"}
]

const contenido = document.getElementById("contenido");
// Opción #1 => Utilizando método MAP
/* contenido.innerHTML = productos.map(item => `
    <div class="col-md-3">
        <div class="card border-0 text-center">
            <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}" />
            <div class="card-body">
                <h5 class="card-title fs-6 fw-light">${item.nombre}</h5>
                <p class="card-text fw-light text-danger">$${item.precio}</p>
            </div>
        </div>
    </div>`).join(""); */


// Opción #2 => Utilizando método For, Foreach o For..OF
let contenidoHTML = "";

for (const item of productos) {
    contenidoHTML += `<div class="col-md-3">
        <div class="card border-0 text-center">
            <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}" />
            <div class="card-body">
                <h5 class="card-title fs-6 fw-light">${item.nombre}</h5>
                <p class="card-text fw-light text-danger">$${item.precio}</p>
            </div>
        </div>
    </div>`;
}

contenido.innerHTML = contenidoHTML;