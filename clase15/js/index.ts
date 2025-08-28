// Typescript
/* const numero1:Number = 10;
console.log(numero1);

const nombre:String = "Ivan";
console.log(nombre);

const mayorDeEdad:boolean = true;
console.log(mayorDeEdad); */

// Funciones
/* const calcularIMC:(peso:number, altura:number) => number = function (peso, altura) {
    return peso / (altura * altura)
}

let resultado = calcularIMC(85, 1.76)
console.log("Resultado: " + resultado); */

// Interfaces
/* interface Post {
    title: string;
    body: string;
}

const miPost: Post = {
    title: "Matrix II",
    body: "Reloaded"
} */


/* async function loadResource<ResultType>(path: string): Promise<ResultType> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
} */

// Tipos compuestos
/* let numeros: number[] = [1, 2, 3];
let palabras: Array<string> = ["uno", "dos"]; */

// Tuplas
/* let coordenada: [number, number] = [10, 20]; */

// Un variable con 2 tipos de datos definidos
/* let id: string | number = "123" */

// Literales
/* let direccion: "izquierda" | "derecha";
direccion = "derecha" */

// ENUM
/* enum Estado {
    Activo,
    Inactivo,
    Suspendido
}
let estadoActual: Estado = Estado.Activo; */

// Deactivando typescript con any
/* let dato: any = false;
dato = 42; */

// Alias de tipos
/* type UsuarioID = string | number;
let id: UsuarioID = 123; */

// Intersección de tipos
/* type Persona = { nombre: string };
type Empleado = { salario: number };
type Trabajador = Persona & Empleado;
let t: Trabajador = {
    nombre: "Ana",
    salario: 50000
}; */

// Funciones tradicionales

/* function saludar(nombre: string): string {
    return `Hola, ${nombre}`;
}
saludar("22") */

// Funciones flechas
/* const sumar = (a: number, b: number): number => a + b;
sumar(10, 20); */

// Tipo de funciones
/* let operacion: (x: number, y: number) => number;
    operacion = function (a, b) {
    return a + b;
}; */


// Funciones con valores opcionales
/* function saludar(nombre?: string): void {
    console.log(`Hola ${nombre ?? "visitante"}`);
} */

// Validación de restParemeters
/* function sumarTodo(...numeros: number[]): number {
    return numeros.reduce((total, n) => total + n, 0);
}
const valores = [1, 2, 3];
sumarTodo(valores); */


function identidad<T>(valor: T): T {
return valor;
}
let resultado = identidad<string>("texto"); // resultado es string
let resultado2 = identidad<number>(123); // resultado2 es number