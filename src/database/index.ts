import { DataSource } from "typeorm"
import { Componente } from "../entities/Componente"
import { Evento } from "../entities/Evento"
import { Tarefa } from "../entities/Tarefa"
import { Tecnico } from "../entities/Tecnico"
import { Localidade } from "../entities/Localidade"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "bolsista-workspace-db.mysql.database.azure.com",
    port: 3306,
    username: "workspaceroot",
    password: `$WOpgW%5a182`,
    database: "bolsista-workspace",
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
        "./src/database/migrations/*.ts"
    ],
})


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source inicializado!")
    })
    .catch((error) => {
        console.error(error)
    })