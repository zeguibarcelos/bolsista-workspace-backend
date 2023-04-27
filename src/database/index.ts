import { DataSource } from "typeorm"
import { Componente } from "../entities/Componente"
import { Evento } from "../entities/Evento"
import { Tarefa } from "../entities/Tarefa"
import { Tecnico } from "../entities/Tecnico"
import { Localidade } from "../entities/Localidade"

require('dotenv').config();



export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [
        Localidade,
        Componente,
        Evento,
        Tarefa,
        Tecnico
    ],
    migrations: [
        // "./src/database/migrations/*.ts"
    ],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source inicializado!")
    })
    .catch((error) => {
        console.error(error)
    })