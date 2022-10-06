/**
 * Import de Modulos Necesarios
 */
import express from "express";
import morgan from "morgan";

import bookRoutes from "./routes/index.routes";

// Importar rutas desde el archivo de rutas
import productRoutes from "./routes/index.routes";

// Llamar express en variable
const app = express();

/* Setear el puerto a 4000 */
app.set("port", 4000);

/* Middlewares */
app.use(morgan("dev"));
app.use(express.json());

/* Middleware que se ejecuta cada que inicia el servidor */
app.use("/api/books", bookRoutes);

// Exportar el componente app
export default app;
