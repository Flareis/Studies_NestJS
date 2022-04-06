import { Column, DefaultScope, ForeignKey, Model, Table, Unique } from "sequelize-typescript";
import { BelongsToMany } from "sequelize/types";
import { Autor } from "./autor.model";
import { Livro } from "./livro.model";

@DefaultScope({
  include: [() => Livro, () => Autor],
  attributes: ['number']
})

@Table
export class LivroAutor extends Model<LivroAutor> {
  @ForeignKey(() => Livro)
  @Column
  livroId:number;

  @ForeignKey(() => Autor)
  @Column
  autorId:number;

  @Unique
  @Column
  number: number;

}