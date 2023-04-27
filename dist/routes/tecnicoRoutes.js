"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TecnicoController_1 = require("../controllers/TecnicoController");
const tecnicoRouter = (0, express_1.Router)();
const tecnicoController = new TecnicoController_1.TecnicoController();
tecnicoRouter.post("/", tecnicoController.create);
tecnicoRouter.put("/:matricula", tecnicoController.update);
tecnicoRouter.get("/:matricula", tecnicoController.findByMatricula);
tecnicoRouter.get("/", tecnicoController.findAll);
tecnicoRouter.delete("/:matricula", tecnicoController.deleteByMatricula);
exports.default = tecnicoRouter;
//# sourceMappingURL=tecnicoRoutes.js.map