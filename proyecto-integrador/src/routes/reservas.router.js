import { Router } from "express";
import Reserva from "../classes/reservas.class.js";

const reservarRouter = Router();
const reserva = new Reserva();

reservarRouter.get("/", (req, res) => {
    const reservas = reserva.getReservas();

    res.send(reservas);
})
reservarRouter.post("/", (req, res) => {
    const {nombrePaciente, fecha, hora, especialidad} = req.body;
    const nuevaReserva = {nombrePaciente, fecha, hora, especialidad};
    reserva.agregar(nuevaReserva);

    res.send({estado:"OK", mensaje:"Se agregó una nueva reserva!"});
})

export default reservarRouter