import { Router } from "express";
import Reserva from "../classes/reservas.class.js";

const reservarRouter = Router();
const reserva = new Reserva();

reservarRouter.get("/", (req, res) => {
    const reservas = reserva.buscarReservas();

    res.send(reservas);
})
reservarRouter.post("/", (req, res) => {
    const {nombrePaciente, fecha, hora, especialidad} = req.body;
    const nuevaReserva = {nombrePaciente, fecha, hora, especialidad};
    reserva.agregar(nuevaReserva);

    res.send({estado:"OK", mensaje:"Se agregó una nueva reserva!"});
})
reservarRouter.put("/:id", (req, res) => {
    const {id} = req.params;
    const {nombrePaciente, fecha, hora, especialidad} = req.body;
    const nuevaReserva = {nombrePaciente, fecha, hora, especialidad};
    reserva.modificar(id, nuevaReserva);

    res.send({estado:"OK", mensaje:"Se actualizó la reserva!"});
})
reservarRouter.delete("/:id", (req, res) => {
    const {id} = req.params;
    reserva.eliminar(id);

    res.send({estado:"OK", mensaje:"Se eliminó la reserva!"});
})

export default reservarRouter