import express from "express"
import { CadastroController } from "./Controllers/cadastroController"

export const router = express.Router()

router.get("/cursos", CadastroController.getCursos)
router.get("/curso/:id", CadastroController.getSingleCurso)
