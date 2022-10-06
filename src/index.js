// Importar app para llamar al servidor express
import app from "./app";
import doge from "ascii-doge";
// Funcion Main para inicializar el Proyecto haciendo uso de App
const main = () => {
    // Inicializacion del Servidor en el Puerto Designado
    app.listen(app.get("port"));
    // Log de Confirmacion - Eliminar Despues
    console.log("Server on port: ", app.get("port"));
    // :3
    console.log(doge.toString());
};

// Inicializar Main
main();
