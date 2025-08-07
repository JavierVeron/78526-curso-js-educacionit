import fs from "fs";
const rutaArchivo = "src/data/reservas.json";

class Reserva {
    constructor() {
        this.reservas = [];
    }

    generarId() {
        return (this.reservas.length + 1);
    }

    buscarReservas() {
        this.reservas = JSON.parse(fs.readFileSync(rutaArchivo));
        
        return this.reservas;
    }

    buscarReserva(id) {
        this.reservas = JSON.parse(fs.readFileSync(rutaArchivo));
        const reserva = this.reservas.find(item => item.id == id);

        return reserva;
    }

    agregar(reserva) {
        this.buscarReservas();
        const nuevaReserva = {id:this.generarId(), ...reserva};
        this.reservas.push(nuevaReserva);
        fs.writeFileSync(rutaArchivo, JSON.stringify(this.reservas));
    }

    modificar(id, reserva) {
        const reservaActual = this.buscarReserva(id);
        reservaActual.nombrePaciente = reserva.nombrePaciente;
        reservaActual.fecha = reserva.fecha;
        reservaActual.hora = reserva.hora;
        reservaActual.especialidad = reserva.especialidad;
        fs.writeFileSync(rutaArchivo, JSON.stringify(this.reservas));
    }

    eliminar(id) {
        this.buscarReservas();
        const nuevasReservas = this.reservas.filter(item => item.id != id);
        fs.writeFileSync(rutaArchivo, JSON.stringify(nuevasReservas));
    }
}

export default Reserva