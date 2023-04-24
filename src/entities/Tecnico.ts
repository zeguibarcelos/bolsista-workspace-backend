import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from "typeorm";
import { Tarefa } from "./Tarefa";

@Entity()
export class Tecnico {
  @PrimaryGeneratedColumn()
  matricula: number;

  @Column()
  nome: string;

  constructor(matricula: number, nome: string) {
    this.nome = nome;
    this.matricula = matricula;
  }


}