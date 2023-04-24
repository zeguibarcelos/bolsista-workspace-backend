import { EntityManager } from "typeorm";
import { Localidade } from "../entities/Localidade";

export class LocalidadeRepository {
  private manager: EntityManager;

  constructor(manager: EntityManager) {
    this.manager = manager;
  }

  create = async (localidade: Localidade): Promise<Localidade> => {
    const newLocalidade = await this.manager.save(Localidade, localidade);
    return newLocalidade;
  };

  update = async (id: number, localidade: Localidade): Promise<Localidade> => {
    const result = await this.manager.update(Localidade, id, localidade);
    const updatedLocalidade = await this.manager.findOneOrFail(Localidade, {
      where: {
        id_localidade: id,
      },
    });
    return updatedLocalidade;
  };

  findById = async (id: number): Promise<Localidade> => {
    const localidade = await this.manager.findOneOrFail(Localidade, {
        where: {
          id_localidade: id,
        },
        relations: ['componentes']
      });
    return localidade;
  };

  findAll = async (): Promise<Localidade[]> => {
    const localidades = await this.manager.find(Localidade, { relations: ['componentes'] });
    return localidades;
  };

  deleteById = async (id: number): Promise<boolean> => {
    const result = await this.manager.delete(Localidade, id);
    return result.affected !== 0;
  };
}
