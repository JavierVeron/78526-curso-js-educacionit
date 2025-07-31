import fs from "fs";
const rutaArchivo = "src/data/reservas.json";

class Reserva {
    constructor() {

    }

    getReservas() {
        const reservas = JSON.parse(fs.readFileSync(rutaArchivo));
        
        return reservas;
    }

    agregar(reserva) {
        const reservas = JSON.parse(fs.readFileSync(rutaArchivo));
        reservas.push(reserva);
        fs.appendFileSync(rutaArchivo, JSON.stringify(reservas));
    }

}

export default Reserva