import mysql from "mysql2"

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "cadastro",
})

connection.connect((error) => {
  if(error) throw error
  console.log('Conectado com o banco de dados.')
})
