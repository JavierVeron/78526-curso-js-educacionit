import { Router } from "express";
import Usuario from "../classes/usuarios.class.js";

const usuariosRouter = Router();
const usuario = new Usuario();

usuariosRouter.get("/", (req, res) => {
    const usuarios = usuario.getUsuarios();

    res.send(usuarios);
})

export default usuariosRouter