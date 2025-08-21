// Representación de datos binarios en JavaScript
// Crear un ArrayBuffer
/* const buffer = new ArrayBuffer(16); // Reserva 16 bytes en memoria
console.log(buffer.byteLength); // 16 */

// Crear un TypedArray
/* const buffer = new ArrayBuffer(8);
const intView = new Int32Array(buffer);
intView[0] = 42;
console.log(intView[0]); // 42 */

// Crear un Blob a partir de datos binarios
/* const blob = new Blob(["Hola, mundo"], { type: "text/plain" });
console.log(blob);
console.log(blob.size); // 12 (tamaño en bytes)
console.log(blob.type); // text/plain */

// Crear un Objeto File
/* const archivo = new File(["Contenido del archivo"], "archivo.txt", { type: "text/plain" });
console.log(archivo);
console.log(archivo.name); // "archivo.txt"
console.log(archivo.size); // 20 */

//Lectura de archivos en el navegador: FileReader
const input = document.querySelector('input[type="file"]')
input.addEventListener('change', event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    /* reader.onload = () => console.log(reader.result);
    reader.readAsText(file); */

    reader.onload = () => {
        const arrayBuffer = reader.result;
        console.log(new Uint8Array(arrayBuffer)); // Muestra los datos en binario
    };
    reader.readAsArrayBuffer(file);
});

