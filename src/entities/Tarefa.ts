import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, ManyToMany } from "typeorm";
import { Evento } from "./Evento";
import { Tecnico } from "./Tecnico";
import { Componente } from "./Componente";

@Entity()
export class Tarefa {
  @PrimaryGeneratedColumn()
  id_tarefa: number;

  @Column()
  descricao: string;

  @Column()
  status: string;

  @ManyToOne(() => Evento, evento => evento.tarefas)
  evento: Evento;

  @ManyToMany(() => Tecnico, {cascade: true})
  @JoinTable()
  tecnicos: Tecnico[];

  @ManyToMany(() => Componente, {cascade: true})
  @JoinTable()
  componentes: Componente[];

  constructor(descricao: string, status:string, evento: Evento, tecnicos: Tecnico[], componentes: Componente[]) {
    this.descricao = descricao;
    this.status = status;
    this.evento = evento;
    this.tecnicos = tecnicos;
    this.componentes = componentes;
  }
}