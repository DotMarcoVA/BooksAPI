// Importar Router y Metodos/Controladores
import { Router } from "express";
import { methods as bookControllers } from "./../controllers/product.controller";
// Inicializar Router
const router = Router();
// Verbos para Rutas (Consultar Todos/Uno, Añadir, Update, Delete)
// http://127.0.0.1:4000/api/books Ruta Comun
router.get("/", bookControllers.getBooks); // GET http://127.0.0.1:4000/api/books/
router.get("/:id", bookControllers.getBook); // GET http://127.0.0.1:4000/api/books/id
router.post("/", bookControllers.createBook); // POST http://127.0.0.1:4000/api/books/
router.put("/:id", bookControllers.updateBook); // PUT http://127.0.0.1:4000/api/books/id
router.delete("/:id", bookControllers.deleteBook); // DELETE http://127.0.0.1:4000/api/books/id

// Exportar Metodos
export default router;
