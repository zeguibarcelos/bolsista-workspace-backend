import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany } from "typeorm";
import { Tarefa } from "./Tarefa";
import { Localidade } from "./Localidade";

@Entity()
export class Componente {
  @PrimaryGeneratedColumn()
  id_componente: number;

  @Column()
  descricao: string;

  @ManyToOne(() =>Localidade, localidade => localidade.componentes)
  localidade: Localidade;

  constructor(descricao: string, localidade: Localidade) {
    this.descricao = descricao;
    this.localidade = localidade;
  }
}