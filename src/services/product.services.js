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
// Requiere: Endpoint, JSON-Body (Variables con los Datos)
async function createBook(id, title, total_pages, author, nationality, language, cover_url, editorial, response) {
    // If de verificacion de casillas completadas
    if (
        id === undefined ||
        title === undefined ||
        total_pages === undefined ||
        author === undefined ||
        nationality === undefined ||
        language === undefined ||
        cover_url === undefined ||
        editorial === undefined
    ) {
        return response.status(400).json({ message: "Bad Request. Check the fields and try again" });
    }
    const connection = await getConnection();
    // Query SQL donde especifica: INSERTAR en la tabla books (Parametros) los valores (Indice de Parametros) + (Valores de Parametros)
    const result = await connection.query(
        "INSERT INTO `books` (`id`, `title`, `total_pages`, `author`, `nationality`, `language`, `cover_url`, `editorial`) VALUES (?,?,?,?,?,?,?,?)",
        [id, title, total_pages, author, nationality, language, cover_url, editorial]
    );
    return response.json(result);
}

// Funcion updateBook la cual contiene el QuerySQL para cambiar valores de un libro existente
// Requiere: Endpoint, ID, JSON-Body
async function updateBook(body, title, total_pages, author, nationality, language, cover_url, editorial, response) {
    // If de verificacion de casillas completadas
    if (
        title === undefined ||
        total_pages === undefined ||
        author === undefined ||
        nationality === undefined ||
        language === undefined ||
        cover_url === undefined ||
        editorial === undefined
    ) {
        return response.status(400).json({ message: "Bad Request. Check the fields and try again" });
    }
    const connection = await getConnection();
    // Query SQL donde especifica: ACTUALIZAR en la tabla books y COLOCAR en X parametro Y valor
    const result = await connection.query(
        "UPDATE `books` SET `title`=?, `total_pages`=?, `author`=?, `nationality`=?, `language`=?, `cover_url`=?, `editorial`=? WHERE id=?",
        [title, total_pages, author, nationality, language, cover_url, editorial, body.id]
    );
    return response.json(result);
}

// Funcion deleteBook la cual contiene el QuerySQL para eliminar un libro especifico
// Requiere: Endpoint, ID
async function deleteBook(body, response) {
    const connection = await getConnection();
    console.log(body.id);
    // Query SQL donde especifica: SELECCIONAR TODOS DESDE books DONDE EL ID SEA <id>
    const result = await connection.query("DELETE FROM books WHERE id = ?", body.id);
    return response.json(result);
}

export const methods = {
    readBooks,
    readBook,
    createBook,
    updateBook,
    deleteBook,
};
