import { Router } from "express";
import { TecnicoController } from "../controllers/TecnicoController";

const tecnicoRouter = Router();
const tecnicoController = new TecnicoController();

tecnicoRouter.post("/", tecnicoController.create);
tecnicoRouter.put("/:matricula", tecnicoController.update);
tecnicoRouter.get("/:matricula", tecnicoController.findByMatricula);
tecnicoRouter.get("/", tecnicoController.findAll);
tecnicoRouter.delete("/:matricula", tecnicoController.deleteByMatricula);

export default tecnicoRouter;
