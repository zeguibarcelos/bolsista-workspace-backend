import { EntityManager } from "typeorm";
import { Evento } from "../entities/Evento";

export class EventoRepository {
  private manager: EntityManager;

  constructor(manager: EntityManager) {
    this.manager = manager;
  }

  create = async (evento: Evento): Promise<Evento> => {
    const newEvento = await this.manager.save(Evento, evento);
    return newEvento;
  };

  update = async (id: number, evento: Evento): Promise<Evento> => {
    const result = await this.manager.update(Evento, id, evento);
    const updatedEvento = await this.manager.findOneOrFail(Evento, {
      where: {
        id_evento: id,
      },
    });
    return updatedEvento;
  };

  findById = async (id: number): Promise<Evento> => {
    const evento = await this.manager.findOneOrFail(Evento, {
        where: {
          id_evento: id,
        },
      });
    return evento;
  };

  findAll = async (): Promise<Evento[]> => {
    const eventos = await this.manager.find(Evento);
    return eventos;
  };

  deleteById = async (id: number): Promise<boolean> => {
    const result = await this.manager.delete(Evento, id);
    return result.affected !== 0;
  };
}
