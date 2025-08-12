// Objeto Date
// Obtener la fecha actual (dia/mes/año hora/minuto/segundo/milisegundo exacto cuando se disparo la función)
/* const fecha = new Date();
console.log(fecha);
//console.log(fecha.toDateString());
//console.log(fecha.toISOString());
const fechaActual = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
console.log(fechaActual); */

// Definir una fecha
/* const fecha = new Date(2025, 8, 7, 14, 30, 0);
console.log(fecha); // Tue Mar 12 2024 14:30:00 */

// Definir una fecha con Formato ISO
/* const fechaISO = new Date("2025-08-07T14:30:00Z");
console.log(fechaISO); // Formato UTC */

// Definir una fecha con Formato timestamp
/* const fechaTimestamp = new Date(1754565417);
console.log(fechaTimestamp); // Formato UTC */

// Calcular diferencia de días
/* const inicio = new Date();
const final = new Date(2026, 0, 13);
const diferencia = final.getTime() - inicio.getTime();
console.log(diferencia);
const dias = Math.round(diferencia / (1000 * 60 * 60 * 24));
console.log("Días:", dias); */


// Formato JSON
// JSON.stringify() => Convertir un Objeto JS a Formato JSON
/* const reserva = {
    "id": 19,
    "nombrePaciente": "Florencia Vera",
    "fecha": "2025-08-07",
    "hora": "09:00",
    "especialidad": "Neurología"
}
console.log(reserva);
console.log(JSON.stringify(reserva)); */

// JSON.parse() => Convertir un Formato JSON a un Objeto JS
/* const reserva = '{"id":29,"nombrePaciente":"Florencia Vera","fecha":"2025-08-07","hora":"09:00","especialidad":"Neurología"}';
console.log(reserva);
console.log(JSON.parse(reserva)); */

// To.JSON() => Convierte objetos especiales JS a un Formato JSON (metodo propio del objeto Date)
/* const fechaActual = new Date();
console.log(fechaActual.toJSON()); */


// LocalStorage
//localStorage.setItem("nombre", "Guille Lopez");
//localStorage.setItem("edad", 30);
/* console.log(localStorage.getItem("nombre"));
console.log(localStorage.getItem("edad"));
console.log(typeof(localStorage.getItem("nombre")));
console.log(typeof(localStorage.getItem("edad"))); */

const reserva = {
    id: 19,
    nombrePaciente: "Florencia Vera",
    fecha: "2025-08-07",
    hora: "09:00",
    especialidad: "Neurología"
}
const reservas = [
    {
        id: 17,
        nombrePaciente: "Andrea Ponce",
        fecha: "2025-08-06",
        hora: "11:00",
        especialidad: "Traumatología"
    },
    {
        id: 18,
        nombrePaciente: "Ricardo Acosta",
        fecha: "2025-08-06",
        hora: "11:30",
        especialidad: "Ginecología"
    },
    {
        id: 19,
        nombrePaciente: "Florencia Vera",
        fecha: "2025-08-07",
        hora: "09:00",
        especialidad: "Neurología"
    }
]

localStorage.setItem("edad", JSON.stringify(30));
localStorage.setItem("reserva", JSON.stringify(reserva));
localStorage.setItem("reservas", JSON.stringify(reservas));
console.log(JSON.parse(localStorage.getItem("edad")));
console.log(JSON.parse(localStorage.getItem("reserva")));
console.log(JSON.parse(localStorage.getItem("reservas")));