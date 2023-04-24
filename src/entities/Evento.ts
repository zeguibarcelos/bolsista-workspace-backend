import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Tarefa } from "./Tarefa";

@Entity()
export class Evento {
  @PrimaryGeneratedColumn()
  id_evento: number;

  @Column()
  prioridade: string;

  @Column()
  status: string;

  @Column()
  tipo: string;

  @Column()
  categoria: string;

  @Column()
  descricao: string;

  @Column({ type: 'datetime' })
  data_hora_inicio: Date;

  @Column({ type: 'datetime' })
  data_hora_fim: Date;

  constructor(prioridade: string, status: string,tipo: string, categoria: string, descricao: string, data_hora_inicio: Date, data_hora_fim: Date) {
    this.prioridade = prioridade;
    this.status = status;
    this.tipo = tipo;
    this.categoria = categoria;
    this.descricao = descricao;
    this.data_hora_inicio = data_hora_inicio;
    this.data_hora_fim = data_hora_fim;
  }

  @OneToMany(() => Tarefa, tarefa => tarefa.evento)
  tarefas: Tarefa[];
}
