"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LocalidadeController_1 = require("../controllers/LocalidadeController");
const localidadeRouter = (0, express_1.Router)();
const localidadeController = new LocalidadeController_1.LocalidadeController();
localidadeRouter.post("/", localidadeController.create);
localidadeRouter.put("/:id", localidadeController.update);
localidadeRouter.get("/:id", localidadeController.findById);
localidadeRouter.get("/", localidadeController.findAll);
localidadeRouter.delete("/:id", localidadeController.deleteById);
exports.default = localidadeRouter;
//# sourceMappingURL=localidadeRoutes.js.map