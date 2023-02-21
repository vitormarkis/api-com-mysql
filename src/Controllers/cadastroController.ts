import { Request, Response } from "express"
import { connection } from "../services/mysql"

type ControllerMethod = (request: Request, response: Response) => void

const getCursos: ControllerMethod = (request, response) => {
  connection.query("SELECT * FROM cursos", (error, results) => {
    if (error) throw error
    return response.json(results)
  })
}

const getSingleCurso: ControllerMethod = (request, response) => {
  const { id } = request.params

  connection.query(`SELECT * FROM cursos WHERE idcurso = ${id}`, (error, results) => {
    if (error) throw error
    return response.json(results)
  })
}

export const CadastroController = {
  getCursos,
  getSingleCurso,
}
