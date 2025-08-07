import { Router } from "express";
import Usuario from "../classes/usuarios.class.js";

const usuariosRouter = Router();
const usuario = new Usuario();

usuariosRouter.get("/", (req, res) => {
    const usuarios = usuario.buscarUsuarios();

    res.send(usuarios);
})
usuariosRouter.post("/registro", (req, res) => {
    const {nombre, email, contrasena, telefono} = req.body;
    const nuevoUsuario = {nombre, email, contrasena, telefono};
    usuario.agregar(nuevoUsuario);

    res.send({estado:"OK", mensaje:"Se agregó una nuevo usuario!"});
})
usuariosRouter.post("/login", (req, res) => {
    const {email, contrasena} = req.body;
    const datos = {email, contrasena};
    const resultado = usuario.validar(datos);

    if (resultado) {
        res.send({estado:"OK", mensaje:"Inicio sesión ok!"});
    } else {
        res.send({estado:"OK", mensaje:"Error en Inicio de sesión!"});
    }
})

export default usuariosRouter