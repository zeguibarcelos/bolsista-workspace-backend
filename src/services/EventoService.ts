import { AppDataSource } from "../database";
import { Evento } from "../entities/Evento";
import { EventoRepository } from "../repositories/EventoRepository";

export class EventoService {
    private eventoRepository: EventoRepository;
  
    constructor(eventoRepository = new EventoRepository(AppDataSource.manager)) {
      this.eventoRepository = eventoRepository;
    }
  
    create = async (evento: Evento): Promise<Evento> => {
      const newEvento = await this.eventoRepository.create(evento);
      return newEvento;
    }
  
    update = async (id: number, evento: Evento): Promise<Evento> => {
      const updatedEvento = await this.eventoRepository.update(id, evento);
      return updatedEvento;
    }
  
    findById = async (id: number): Promise<Evento> => {
      const evento = await this.eventoRepository.findById(id);
      return evento;
    }
  
    findAll = async (): Promise<Evento[]> => {
      const eventos = await this.eventoRepository.findAll();
      return eventos;
    }
  
    deleteById = async (id: number): Promise<boolean> => {
      const result = await this.eventoRepository.deleteById(id);
      return result;
    }
  }