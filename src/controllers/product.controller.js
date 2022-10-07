// Importar servicios
import { methods as bookServices } from "./../services/product.services";

// Instanciar Metodos
// Metodo GetBooks que trae TODOS los Libros
const getBooks = async (req, res) => {
    // TryCatch para conexion y acceso a la base de datos
    try {
        // Se llama a la funcion y se guarda la respuesta en query
        const query = await bookServices.readBooks(res);
        return query;
    } catch (error) {
        // En caso de error, se regresa un status y se muestra
        res.status(400);
        res.send(error.message);
    }
};

// Metodo GetBook que trae un metodo en conciso (Req: id)
const getBook = async (req, res) => {
    // TryCatch para conexion y acceso a la base de datos
    try {
        // Se llama a la funcion y se guarda la respuesta en query
        const query = await bookServices.readBook(req.params, res);
        return query;
    } catch (error) {
        // En caso de error, se regresa un status y se muestra
        res.status(400);
        res.send(error.message);
    }
};

// Metodo CreateBook que crea un libro (Req: Parametros de adicion)
const createBook = async (req, res) => {
    // TryCatch para conexion y acceso a la base de datos
    try {
        // Se llama a la funcion y se guarda la respuesta en query
        // Se guardan los valores del Body de la Request en Variables para ser enviadas al servicio
        const { id, title, total_pages, author, nationality, language, cover_url, editorial } = req.body;
        const query = await bookServices.createBook(id, title, total_pages, author, nationality, language, cover_url, editorial, res);
        return query;
    } catch (error) {
        // En caso de error, se regresa un status y se muestra
        res.status(400);
        res.send(error.message);
    }
};

// Metodo UpdateBook que actualiza un libro en conciso (Req: Id + Parametros)
const updateBook = async (req, res) => {
    try {
        const { title, total_pages, author, nationality, language, cover_url, editorial } = req.body;
        const query = await bookServices.updateBook(req.params, title, total_pages, author, nationality, language, cover_url, editorial, res);
        return query;
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
};

// Metodo DeleteBook que elimina un libro en conciso (Req: Id)
const deleteBook = async (req, res) => {
    // TryCatch para conexion y acceso a la base de datos
    try {
        // Se llama a la funcion y se guarda la respuesta en query
        const query = await bookServices.deleteBook(req.params, res);
        return query;
    } catch (error) {
        // En caso de error, se regresa un status y se muestra
        res.status(400);
        res.send(error.message);
    }
};

// Exportar Metodos
export const methods = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
};
