"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EventoController_1 = require("../controllers/EventoController");
const eventoRouter = (0, express_1.Router)();
const eventoController = new EventoController_1.EventoController();
eventoRouter.post("/", eventoController.create);
eventoRouter.put("/:id", eventoController.update);
eventoRouter.get("/:id", eventoController.findById);
eventoRouter.get("/", eventoController.findAll);
eventoRouter.delete("/:id", eventoController.deleteById);
exports.default = eventoRouter;
//# sourceMappingURL=eventoRoutes.js.map