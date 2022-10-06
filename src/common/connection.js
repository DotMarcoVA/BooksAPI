// Importar Promise MySQL
import mysql from "promise-mysql";
// Importar configuracion de las variables constantes de acceso a la Base de Datos
import config from "./constants";

// Funcion de Conexion a la Base de Datos, recibiendo como parametro la Configuracion
const connection = mysql.createConnection({
    host: config.HOST,
    database: config.DB,
    user: config.USER,
    password: config.PASSWORD,
});

// Inicializacion de la conexion
const getConnection = () => {
    return connection;
};

// Exportar la conexion como Modulo
module.exports = {
    getConnection,
};
