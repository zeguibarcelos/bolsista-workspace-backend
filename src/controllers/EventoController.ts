import { Request, Response } from "express";
import { EventoService } from "../services/EventoService";
import { Evento } from "../entities/Evento";

export class EventoController {
  private eventoService: EventoService;

  constructor(eventoService = new EventoService()) {
    this.eventoService = eventoService;
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const evento = await this.eventoService.create(req.body);
      return res.status(201).json(evento);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = Number(req.params.id);
      const evento = await this.eventoService.update(id, req.body);
      return res.json(evento);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  findById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = Number(req.params.id);
      const evento = await this.eventoService.findById(id);
      return res.json(evento);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  findAll = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const eventos = await this.eventoService.findAll();
      return res.json(eventos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  deleteById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = Number(req.params.id);
      const result = await this.eventoService.deleteById(id);
      return res.json({ success: result });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
