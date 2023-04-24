import { EntityManager } from "typeorm";
import { Tecnico } from "../entities/Tecnico";

export class TecnicoRepository {
  private manager: EntityManager;

  constructor(manager: EntityManager) {
    this.manager = manager;
  }

  create = async (tecnico: Tecnico): Promise<Tecnico> => {
    const newTecnico = await this.manager.save(Tecnico, tecnico);
    return newTecnico;
  };

  update = async (matricula: number, tecnico: Tecnico): Promise<Tecnico> => {
    const result = await this.manager.update(Tecnico, matricula, tecnico);
    const updatedTecnico = await this.manager.findOneOrFail(Tecnico, {
      where: {
        matricula: matricula,
      },
    });
    return updatedTecnico;
  };

  findByMatricula = async (matricula: number): Promise<Tecnico> => {
    const tecnico = await this.manager.findOneOrFail(Tecnico, {
        where: {
          matricula: matricula,
        },
      });
    return tecnico;
  };

  findAll = async (): Promise<Tecnico[]> => {
    const tecnicos = await this.manager.find(Tecnico);
    return tecnicos;
  };

  deleteByMatricula = async (matricula: number): Promise<boolean> => {
    const result = await this.manager.delete(Tecnico, matricula);
    return result.affected !== 0;
  };
}
