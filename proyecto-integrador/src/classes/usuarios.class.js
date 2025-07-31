import fs from "fs";
const rutaArchivo = "src/data/usuarios.json";

class Usuario {
    constructor() {

    }

    getUsuarios() {
        const archivo = JSON.parse(fs.readFileSync(rutaArchivo));
        
        return archivo;
    }

}

export default Usuario