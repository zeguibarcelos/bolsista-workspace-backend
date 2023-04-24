import { Router } from "express";
import { LocalidadeController } from "../controllers/LocalidadeController";

const localidadeRouter = Router();
const localidadeController = new LocalidadeController();

localidadeRouter.post("/", localidadeController.create);
localidadeRouter.put("/:id", localidadeController.update);
localidadeRouter.get("/:id", localidadeController.findById);
localidadeRouter.get("/", localidadeController.findAll);
localidadeRouter.delete("/:id", localidadeController.deleteById);

export default localidadeRouter;
