import express from "express"
import cors from "cors"
import usuariosRouter from "./routes/usuarios.router.js";
import reservarRouter from "./routes/reservas.router.js";

const app = express()
const port = 8080;
app.use(cors());
app.use(express.json());
app.use("/api/usuarios", usuariosRouter);
app.use("/api/reservas", reservarRouter);



app.listen(port, () => {
    console.log("Servidor activo: " + port);
})