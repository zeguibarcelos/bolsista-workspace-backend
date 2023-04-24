import { AppDataSource } from "../database";
import { Tecnico } from "../entities/Tecnico";
import { TecnicoRepository } from "../repositories/TecnicoRepository";

export class TecnicoService {
  private tecnicoRepository: TecnicoRepository;

  constructor(tecnicoRepository = new TecnicoRepository(AppDataSource.manager)) {
    this.tecnicoRepository = tecnicoRepository;
  }

  create = async (tecnico: Tecnico): Promise<Tecnico> => {
    const newTecnico = await this.tecnicoRepository.create(tecnico);
    return newTecnico;
  }

  update = async (matricula: number, tecnico: Tecnico): Promise<Tecnico> => {
    const updatedTecnico = await this.tecnicoRepository.update(matricula, tecnico);
    return updatedTecnico;
  }

  findByMatricula = async (matricula: number): Promise<Tecnico> => {
    const tecnico = await this.tecnicoRepository.findByMatricula(matricula);
    return tecnico;
  }

  findAll = async (): Promise<Tecnico[]> => {
    const tecnicos = await this.tecnicoRepository.findAll();
    return tecnicos;
  }

  deleteByMatricula = async (matricula: number): Promise<boolean> => {
    const result = await this.tecnicoRepository.deleteByMatricula(matricula);
    return result;
  }
}
