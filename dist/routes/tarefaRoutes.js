"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TarefaController_1 = require("../controllers/TarefaController");
const tarefaRouter = (0, express_1.Router)();
const tarefaController = new TarefaController_1.TarefaController();
tarefaRouter.post("/", tarefaController.create);
tarefaRouter.put("/", tarefaController.update);
tarefaRouter.get("/:id", tarefaController.findById);
tarefaRouter.get("/evento/:id", tarefaController.findByEventoId);
tarefaRouter.get("/", tarefaController.findAll);
tarefaRouter.get("/localidade/count", tarefaController.countAll);
tarefaRouter.delete("/:id", tarefaController.deleteById);
exports.default = tarefaRouter;
//# sourceMappingURL=tarefaRoutes.js.map