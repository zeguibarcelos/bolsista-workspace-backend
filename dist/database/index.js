"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Componente_1 = require("../entities/Componente");
const Evento_1 = require("../entities/Evento");
const Tarefa_1 = require("../entities/Tarefa");
const Tecnico_1 = require("../entities/Tecnico");
const Localidade_1 = require("../entities/Localidade");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [
        Localidade_1.Localidade,
        Componente_1.Componente,
        Evento_1.Evento,
        Tarefa_1.Tarefa,
        Tecnico_1.Tecnico
    ],
    migrations: [
    // "./src/database/migrations/*.ts"
    ],
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source inicializado!");
})
    .catch((error) => {
    console.error(error);
});
//# sourceMappingURL=index.js.map