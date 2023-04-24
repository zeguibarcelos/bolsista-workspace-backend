import { Request, Response } from "express";
import { TarefaService } from "../services/TarefaService";
import { Evento } from "../entities/Evento";

export class TarefaController {
  private tarefaService: TarefaService;

  constructor(tarefaService = new TarefaService()) {
    this.tarefaService = tarefaService;
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const tarefa = req.body;
      const newTarefa = await this.tarefaService.create(tarefa);
      return res.status(201).json(newTarefa);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const tarefa = req.body;
      const updatedTarefa = await this.tarefaService.update(tarefa);
      return res.json(updatedTarefa);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  findById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = Number(req.params.id);
      const tarefa = await this.tarefaService.findById(id);
      return res.json(tarefa);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  
  findByEventoId = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = Number(req.params.id);
      const tarefas = await this.tarefaService.findByEventoId(id);
      return res.json(tarefas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  findAll = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const tarefas = await this.tarefaService.findAll();
      return res.json(tarefas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  deleteById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = Number(req.params.id);
      const result = await this.tarefaService.deleteById(id);
      return res.json({ success: result });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
