    import { Router } from "express";
    import { TarefaController } from "../controllers/TarefaController";

    const tarefaRouter = Router();
    const tarefaController = new TarefaController();

    tarefaRouter.post("/", tarefaController.create);
    tarefaRouter.put("/", tarefaController.update);
    tarefaRouter.get("/:id", tarefaController.findById);
    tarefaRouter.get("/evento/:id", tarefaController.findByEventoId);
    tarefaRouter.get("/", tarefaController.findAll);
    tarefaRouter.delete("/:id", tarefaController.deleteById);

    export default tarefaRouter;