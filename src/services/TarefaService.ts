import { AppDataSource } from "../database";
import { Evento } from "../entities/Evento";
import { Tarefa } from "../entities/Tarefa";
import { TarefaRepository } from "../repositories/TarefaRepository";

export class TarefaService {
    private tarefaRepository: TarefaRepository;
  
    constructor(tarefaRepository = new TarefaRepository(AppDataSource.manager)) {
      this.tarefaRepository = tarefaRepository;
    }
  
    create = async (tarefa: Tarefa): Promise<Tarefa> => {
      const lTarefa = new Tarefa(tarefa.descricao, tarefa.status, tarefa.evento, tarefa.tecnicos, tarefa.componentes)
      const savedTarefa = await this.tarefaRepository.create(lTarefa);
      return savedTarefa;
    }
  
    update = async (tarefa: Tarefa): Promise<Tarefa> => {
      const updatedTarefa = await this.tarefaRepository.update(tarefa.id_tarefa, tarefa);
      return updatedTarefa;
    }
  
    findById = async (id: number): Promise<Tarefa> => {
      const tarefa = await this.tarefaRepository.findById(id);
      return tarefa;
    }

    findByEventoId = async (id: number): Promise<Tarefa[]> => {
      const tarefa = await this.tarefaRepository.findByEventoId(id);
      return tarefa;
    }
  
    findAll = async (): Promise<Tarefa[]> => {
      const tarefas = await this.tarefaRepository.findAll();
      return tarefas;
    }

    countAll = async (): Promise<Tarefa[]> => {
      const tarefas = await this.tarefaRepository.countAll();
      return tarefas;
    }
  
    deleteById = async (id: number): Promise<boolean> => {
      const result = await this.tarefaRepository.deleteById(id);
      return result;
    }
}
