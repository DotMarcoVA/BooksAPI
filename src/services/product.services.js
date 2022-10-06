// Importar la conexion realizada
import { getConnection } from "./../common/connection";

// Funcion Readbooks la cual contiene el QuerySQL para traer toda la informacion
// Requiere: Endpoint
async function readBooks(response) {
    const connection = await getConnection();
    // Query SQL donde especifica: SELECCIONAR TODOS DESDE books
    const result = await connection.query("SELECT * FROM books");
    return response.json(result);
}

// Funcion Readbook la cual contiene el QuerySQL para traer un libro en especifico
// Requiere: Endpoint, ID
async function readBook(body, response) {
    const connection = await getConnection();
    // Query SQL donde especifica: SELECCIONAR TODOS DESDE books DONDE EL ID SEA <id>
    const result = await connection.query("SELECT * FROM books WHERE id = ?", body.id);
    if (result.length === 0) {
        // Arreglar Despues - Validacion de Elemento Inexistente // Arreglado. Tiempo invertido: 7 horas 32 minutos
        const message = { message: "El Libro consultado con id '" + body.id + "' no existe" };
        return response.json(message);
    } else {
        return response.json(result);
    }
}

// Funcion createBook la cual contiene el QuerySQL para crear un Libro en la Base de Datos
// Requiere: Endpoint, JSON-Body
async function createBook(body, response) {
    if (
        body.id === undefined ||
        body.title === undefined ||
        body.total_pages === undefined ||
        body.author === undefined ||
        body.nationality === undefined ||
        body.language === undefined ||
        body.cover_url === undefined ||
        body.editorial === undefined
    ) {
    }
    const connection = await getConnection();
    // Query SQL donde especifica: SELECCIONAR TODOS DESDE books
    const result = await connection.query("SELECT * FROM books");
    return response.json(result);
}

// Funcion updateBook la cual contiene el QuerySQL para cambiar valores de un libro existente
// Requiere: Endpoint, ID, JSON-Body
async function updateBook(body, response) {}

// Funcion deleteBook la cual contiene el QuerySQL para eliminar un libro especifico
// Requiere: Endpoint, ID
async function deleteBook(body, response) {}

export const methods = {
    readBooks,
    readBook,
    createBook,
    updateBook,
    deleteBook,
};
