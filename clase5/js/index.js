// Try..catch
/* async function obtenerDatos() {
    try {
        let response = await fetc('https://fakestoreapi.com/productss'); // Llamada a la API        
        
        if (!response.ok) throw new Error('Error en la respuesta del servidor'); // Verifica si hubo error en la respuesta
            let data = await response.json(); // Convierte la respuesta en JSON
            console.log(data); // Muestra los datos
    } catch (error) {
        console.error('Error al obtener los datos:', error.message); // Captura cualquier error
    }
} */

/* async function obtenerDatos() {
    let response = await fetc('https://fakestoreapi.com/productss'); // Llamada a la API        
      
        if (!response.ok) throw new Error('Error en la respuesta del servidor'); // Verifica si hubo error en la respuesta
            let data = await response.json(); // Convierte la respuesta en JSON
            console.log(data); // Muestra los datos
} */

/* obtenerDatos(); */

// Try..catch..finally
/* async function obtenerDatos() {
    try {
        let response = await fetch('https://fakestoreapi.com/products'); // Llamada a la API        
        
        if (!response.ok) throw new Error('Error en la respuesta del servidor'); // Verifica si hubo error en la respuesta
            let data = await response.json(); // Convierte la respuesta en JSON
            console.log(data); // Muestra los datos
    } catch (error) {
        console.error('Error al obtener los datos:', error.message); // Captura cualquier error
    } finally {
        console.log("Fin del programa!");
    }
}

obtenerDatos(); */


// Peticiones de Red
// XMLHttpRequest
/* const xhr = new XMLHttpRequest();
xhr.open("GET", "https://fakestoreapi.com/products", true);
xhr.onreadystatechange = function () {    
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    }
};
xhr.send(); */

// Fetch
/* fetch("https://fakestoreapi.com/productss")
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log("Error:", error);
}) */

// Fetch con async..await
/* const obtenerDatos = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/productss")
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error: " + error);
    }
}

obtenerDatos(); */

// Cómo enviar datos a través de la función fetch?
const enviarDatos = async () => {
    try {
        const nuevoProducto = {title:'Remera XXL Blanca', price:35};
        const response = await fetch("https://fakestoreapi.com/products", {
            method:"POST",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(nuevoProducto)

        })
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error: " + error);
    }
}

enviarDatos();