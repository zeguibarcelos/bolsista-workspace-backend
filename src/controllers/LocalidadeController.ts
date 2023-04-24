import { Request, Response } from "express";
import { LocalidadeService } from "../services/LocalidadeService";
import { Localidade } from "../entities/Localidade";

export class LocalidadeController {
  private localidadeService: LocalidadeService;

  constructor(localidadeService = new LocalidadeService()) {
    this.localidadeService = localidadeService;
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const localidade = await this.localidadeService.create(req.body);
      return res.status(201).json(localidade);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = Number(req.params.id);
      const localidade = await this.localidadeService.update(id, req.body);
      return res.json(localidade);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  findById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = Number(req.params.id);
      const localidade = await this.localidadeService.findById(id);
      return res.json(localidade);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  findAll = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const localidades = await this.localidadeService.findAll();
      return res.json(localidades);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  deleteById = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = Number(req.params.id);
      const result = await this.localidadeService.deleteById(id);
      return res.json({ success: result });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

}