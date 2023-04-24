import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Componente } from "./Componente";

@Entity()
export class Localidade {
  @PrimaryGeneratedColumn()
  id_localidade: number;

  @Column()
  descricao: string;

  @OneToMany(() => Componente, componente => componente.localidade, {cascade: true})
  componentes: Componente[];

  constructor (descricao: string, componentes: Componente[]){
    this.descricao = descricao;
    this.componentes = componentes
  }
}