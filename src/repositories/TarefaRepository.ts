import { EntityManager, getManager, Repository } from "typeorm";
import { Tarefa } from "../entities/Tarefa";

export class TarefaRepository {
  private manager: EntityManager;

  constructor(manager: EntityManager) {
    this.manager = manager;
  }

  create = async (teste: any): Promise<Tarefa> => {
    const newTarefa = await this.manager.save(Tarefa, teste);
    return newTarefa;
  };

  update = async (id: number, tarefa: Tarefa): Promise<Tarefa> => {
    await this.manager.update(Tarefa, id, tarefa);
    const updatedTarefa = await this.manager.findOneOrFail(Tarefa, {
      where: {
        id_tarefa: id,
      },
    });

    return updatedTarefa;
  };

  findById = async (id: number): Promise<Tarefa> => {
    const tarefa = await this.manager.findOneOrFail(Tarefa, {
      where: {
        id_tarefa: id,
      },
    });
    return tarefa;
  };

  findByEventoId = async (eventoId: number): Promise<Tarefa[]> => {
    const tarefas = await this.manager.query(
      `
    SELECT 
      t.id_tarefa,
      t.descricao,
      t.status,
      (
        SELECT 
          JSON_ARRAYAGG(
            JSON_OBJECT('id_componente', comp.id_componente, 'descricao', comp.descricao)
          )
        FROM tarefa_componentes_componente tc
        LEFT JOIN componente comp ON comp.id_componente = tc.componenteIdComponente
        WHERE tc.tarefaIdTarefa = t.id_tarefa
      ) AS componentes,
      (
        SELECT 
          JSON_ARRAYAGG(
            JSON_OBJECT('matricula', tec.matricula, 'nome', tec.nome)
          )
        FROM tarefa_tecnicos_tecnico tt
        LEFT JOIN tecnico tec ON tec.matricula = tt.tecnicoMatricula
        WHERE tt.tarefaIdTarefa = t.id_tarefa
      ) AS tecnicos
    FROM tarefa t
    WHERE t.eventoIdEvento = ?
  `,
      [eventoId]
    );

    // Transformar os resultados em objetos Tarefa

    return tarefas.map((tarefa) => ({
      ...tarefa,
      tecnicos: tarefa.tecnicos ? JSON.parse(`${tarefa.tecnicos}`) : [],
      componentes: tarefa.componentes
        ? JSON.parse(`${tarefa.componentes}`)
        : [],
    }));
  };

  findAll = async (): Promise<Tarefa[]> => {
    const tarefas = await this.manager.query("select * from tarefa");
    return tarefas;
  };

  countAll = async (): Promise<Tarefa[]> => {
    const tarefas = await this.manager
      .query(`SELECT l.descricao as localidade, COUNT(DISTINCT e.id_evento) as quantidade_eventos
    FROM localidade l
    INNER JOIN localidade a ON l.id_localidade = a.id_localidade
    INNER JOIN componente c ON a.id_localidade = c.localidadeIdLocalidade 
    INNER JOIN tarefa_componentes_componente tc ON c.id_componente = tc.componenteIdComponente 
    INNER JOIN tarefa t ON tc.tarefaIdTarefa  = t.id_tarefa
    INNER JOIN evento e ON t.eventoIdEvento  = e.id_evento
    GROUP BY l.descricao`);
    return tarefas;
  };

  deleteById = async (id: number): Promise<boolean> => {
    const result = await this.manager.delete(Tarefa, id);
    return result.affected === 1;
  };
}
