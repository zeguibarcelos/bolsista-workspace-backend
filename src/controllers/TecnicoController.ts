import { Request, Response } from "express";
import { TecnicoService } from "../services/TecnicoService";
import { Tecnico } from "../entities/Tecnico";

export class TecnicoController {
  private tecnicoService: TecnicoService;

  constructor(tecnicoService = new TecnicoService()) {
    this.tecnicoService = tecnicoService;
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const tecnico = await this.tecnicoService.create(req.body);
      return res.status(201).json(tecnico);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const matricula = Number(req.params.matricula);
      const tecnico = await this.tecnicoService.update(matricula, req.body);
      return res.json(tecnico);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  findByMatricula = async (req: Request, res: Response): Promise<Response> => {
    try {
      const matricula = Number(req.params.matricula);
      const tecnico = await this.tecnicoService.findByMatricula(matricula);
      return res.json(tecnico);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  findAll = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const tecnicos = await this.tecnicoService.findAll();
      return res.json(tecnicos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  deleteByMatricula = async (req: Request, res: Response): Promise<Response> => {
    try {
      const matricula = Number(req.params.matricula);
      const result = await this.tecnicoService.deleteByMatricula(matricula);
      return res.json({ success: result });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
