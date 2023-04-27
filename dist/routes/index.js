"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventoRoutes_1 = __importDefault(require("./eventoRoutes"));
const tarefaRoutes_1 = __importDefault(require("./tarefaRoutes"));
const tecnicoRoutes_1 = __importDefault(require("./tecnicoRoutes"));
const localidadeRoutes_1 = __importDefault(require("./localidadeRoutes"));
const routes = (0, express_1.Router)();
routes.use('/evento', eventoRoutes_1.default);
routes.use('/tarefa', tarefaRoutes_1.default);
routes.use('/tecnico', tecnicoRoutes_1.default);
routes.use('/localidade', localidadeRoutes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map