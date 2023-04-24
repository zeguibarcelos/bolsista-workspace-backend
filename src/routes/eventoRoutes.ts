import { Router } from "express";
import { EventoController } from "../controllers/EventoController";

const eventoRouter = Router();
const eventoController = new EventoController();

eventoRouter.post("/", eventoController.create);
eventoRouter.put("/:id", eventoController.update);
eventoRouter.get("/:id", eventoController.findById);
eventoRouter.get("/", eventoController.findAll);
eventoRouter.delete("/:id", eventoController.deleteById);

export default eventoRouter;