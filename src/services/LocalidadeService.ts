import { AppDataSource } from "../database";
import { Localidade } from "../entities/Localidade";
import { LocalidadeRepository } from "../repositories/LocalidadeRepository";

export class LocalidadeService {
  private localidadeRepository: LocalidadeRepository;

  constructor(localidadeRepository = new LocalidadeRepository(AppDataSource.manager)) {
    this.localidadeRepository = localidadeRepository;
  }

  create = async (localidade: Localidade): Promise<Localidade> => {
    const newLocalidade = await this.localidadeRepository.create(localidade);
    return newLocalidade;
  }

  update = async (id: number, localidade: Localidade): Promise<Localidade> => {
    const updatedLocalidade = await this.localidadeRepository.update(id, localidade);
    return updatedLocalidade;
  }

  findById = async (id: number): Promise<Localidade> => {
    const localidade = await this.localidadeRepository.findById(id);
    return localidade;
  }

  findAll = async (): Promise<Localidade[]> => {
    const localidades = await this.localidadeRepository.findAll();
    return localidades;
  }

  deleteById = async (id: number): Promise<boolean> => {
    const result = await this.localidadeRepository.deleteById(id);
    return result;
  }
}
