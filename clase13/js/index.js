// Objeto this
/* console.log(this); */

// Modo estricto
/* "use strict";
console.log(this); */

// Propiedad this en objetos
/* const persona = {
    nombre: "María",
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};
persona.saludar(); // "Hola, soy María" */

// Propiedad this en funciones
/* function mostrarNombre() {
    console.log(this);
}
mostrarNombre(); // window (en navegadores) o global (en Node.js) */

/* "use strict";
function mostrarNombre() {
    console.log(this);
}
mostrarNombre(); // undefined */


/* const persona = {
    nombre: "Carlos",
    obtenerNombre() {
        console.log(this.nombre);
    }
};
const fn = persona.obtenerNombre;
console.log(fn);
fn(); // undefined (porque `this` apunta a `window` en modo no estricto) */

// Solución #1 => usando bind()
/* const persona2 = {nombre:"Armando Rivero"};
const fnBind = persona.obtenerNombre.bind(persona2);
fnBind(); // "Carlos" */

/* const persona = {
    nombre: "Carlos",
    obtenerNombre: () => console.log(this.nombre), // `this` hace referencia al contexto donde se definió
    obtenerNombre2() {
        console.log(this.nombre)
    },
    obtenerNombre3:function(){
        const ejecutar = () => console.log(this.nombre);
        ejecutar();
    }
};
persona.obtenerNombre(); // undefined (porque `this` no se refiere a `persona`) (arrow function)
persona.obtenerNombre2(); // Carlos (función tradicional)
persona.obtenerNombre3(); // Carlos (definir una propiedad que tiene función anónima y dentro de la misma declaro una arrow function y la ejecuto) */

// this en Eventos DOM
/* document.querySelector("button").addEventListener("click", function() {
    console.log(this.innerHTML); // Hace referencia al botón que fue clickeado
    this.innerHTML = "Hiciste Click en #1";
}); */

/* document.querySelector("button").addEventListener("click", () => {
    console.log(this); // Aquí `this` NO apunta al botón, sino al `window`
}); */

// this con call(), apply() y bind
// call()
/* function saludar() {
    console.log(`Hola, soy ${this.nombre}`);
}

//saludar();
const persona = { nombre: "Elena" };
saludar.call(persona); // "Hola, soy Elena" */

// apply()
/* function presentar(ciudad, edad) {
    console.log(`${this.nombre} vive en ${ciudad} y tiene ${edad} años`);
}
const persona = { nombre: "Pablo" };
presentar.apply(persona, ["Madrid", 30]); // "Pablo vive en Madrid y tiene 30 años" */

// this en Clases
/* class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}
const p1 = new Persona("Carlos");
console.log(p1.nombre);
p1.saludar(); // "Hola, soy Carlos" */

/* class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        function mensaje() {
            console.log(`Hola, soy ${this.nombre}`);
        }
        mensaje(); // No funciona como función tradicional dentro de un método
    }
}
const p1 = new Persona("Carlos");
console.log(p1.nombre);
p1.saludar(); // undefined */

// Solución usando arrow function
/* class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {        
        const mensaje = () => {
            console.log(`Hola, soy ${this.nombre}`);
        }
        mensaje(); // funciona como arrow function dentro de un método
    }
}
const p1 = new Persona("Carlos");
console.log(p1.nombre);
p1.saludar(); // undefined */