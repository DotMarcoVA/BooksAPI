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
        const query = await bookServices.createBook(req.params, res);
        return query;
    } catch (error) {
        // En caso de error, se regresa un status y se muestra
        res.status(400);
        res.send(error.message);
    }
};

// Metodo UpdateBook que actualiza un libro en conciso (Req: Id + Parametros)
const updateBook = async (req, res) => {};

// Metodo DeleteBook que elimina un libro en conciso (Req: Id)
const deleteBook = async (req, res) => {};

// Exportar Metodos
export const methods = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
};
