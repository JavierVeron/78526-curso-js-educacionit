// String o cadena de caracteres
/* let nombre = " Federico  ";
console.log(nombre);
console.log(nombre.length); // 10
console.log(nombre.replace(" ", "").length); // 9
//nombre = nombre.replaceAll(" ", "");
console.log(nombre.replaceAll(" ", "").length); // 8
nombre = nombre.replaceAll(" ", "").toUpperCase();
console.log(nombre.replaceAll(" ", "").toUpperCase()); // 8
console.log(nombre[nombre.length -1]); // 8
console.log(nombre);
let letra1 = nombre[0];
let letra2 = nombre[1];
console.log(letra1.charCodeAt());
console.log(letra2.charCodeAt());
console.log("A".charCodeAt()); */


// Expresiones regulares
// validacion de email nombre@dominio.extension
// nombre [a-z0-9._]
// dominio [a-z0-9]
// extension [a-z]

/*+3111-4444-4444
230-444-4444
54-9-230-444-4444*/

// validación [3]-[]
/* let email = "javier.veron@gmail.com";
email = email.split("@");
let nombre = email[0];
let resto = email[1].split(".");
dominio = resto[0];
let extension = resto[1];
console.log(nombre, dominio, extension); */

// Definiendo Expresiones Regulares
/* // Opción #1
let er = /ab.c/;
// Opción #2 utilizando el objeto RegExp
let er2 = new RegExp("ab.c");

let texto = "ab1";
console.log(er.test(texto));
console.log(er2.test(texto)); */

// Validación simple de un email @
//let er = /\d@\D/;
/* let er = /\w@\D/;
console.log(er.test("@gmail.com")); */


// Promesas
/* const miPromesa = new Promise((res, rej) => {
    let exito = false;
    
    if (exito) {
        res("Operación exitosa");
    } else {
        rej("Hubo un error");
    }
});

miPromesa
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log("Error: " + error);
})
.finally(() => {
    console.log("Fin del proceso!");
}) */


// Promesa que devuelve otra Promesa
/* fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.catch(error => console.log("Error: " + error))
.then(data => console.log(data.title))
.finally(() => console.log("Fin del proceso!"));

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data => console.log(data.title)) */

// Promise .all()
/* const promise1 = Promise.resolve(10);
const promise2 = 38;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Messi");
});
Promise.all([promise1, promise2, promise3])
.then(valores => {
    console.log(valores);
}); */

/* const promise1 = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => data);
const promise2 = fetch('https://fakestoreapi.com/product').then(response => response.json()).then(data => data);
Promise.all([promise1, promise2])
.then(valores => {
    console.log(valores);
}); */

// Promise .allSettled()
/* const promise1 = Promise.reject(10);
const promise2 = 38;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Messi");
});
Promise.allSettled([promise1, promise2, promise3])
.then(valores => {
    console.log(valores);
}); */

/* const promise1 = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => data);
const promise2 = fetch('https://fakestoreapi.com/product').then(response => response.json()).then(data => data);
Promise.allSettled([promise1, promise2])
.then(valores => {
    console.log(valores);
}); */

// Promise .race
/* const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "Diego Maradona");
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Cristiano Ronaldo");
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Lionel Messi");
});
Promise.race([promise1, promise2, promise3])
.then(valores => {
    console.log(valores);
}); */

// Promise .any
/* const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "Diego Maradona");
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, "Cristiano Ronaldo");
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Lionel Messi");
});
Promise.any([promise1, promise2, promise3])
.then(valores => {
    console.log(valores);
}); */

/* const promise1 = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => data);
const promise2 = fetch('https://fakestoreapi.com/product').then(response => response.json()).then(data => data);
Promise.any([promise1, promise2])
.then(valores => {
    console.log(valores);
}); */

// Promisificación
const obtenerCodigo = (codigo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (codigo.toUpperCase() == "CUPON10") {
                resolve("Felicitaciones! Obtuviste un 10% de descuento!")
            } else {
                reject("Error! No existe el código ingresado!")
            }
        }, 3000);
    })
}

obtenerCodigo("cupon10")
.then(resultado => {
    console.log(resultado);
})
.catch(error => {
    console.log("Error: " + error);
})