import fs from "fs";
const rutaArchivo = "src/data/usuarios.json";

class Usuario {
    constructor() {
        this.usuarios = [];
    }

    generarId() {
        return (this.usuarios.length + 1);
    }

    buscarUsuarios() {
        this.usuarios = JSON.parse(fs.readFileSync(rutaArchivo));
        
        return this.usuarios;
    }

    buscarUsuario(id) {
        this.usuarios = JSON.parse(fs.readFileSync(rutaArchivo));
        const usuario = this.usuarios.find(item => item.id == id);

        return usuario;
    }

    agregar(usuario) {
        this.buscarUsuarios();
        const nuevoUsuario = {id:this.generarId(), ...usuario};
        this.usuarios.push(nuevoUsuario);
        fs.writeFileSync(rutaArchivo, JSON.stringify(this.usuarios));
    }

    validar(datos) {
        this.buscarUsuarios();
        const usuario = this.usuarios.find(item => item.email == datos.email && item.contrasena == datos.contrasena);

        return usuario ? true : false;
    }
}

export default Usuario