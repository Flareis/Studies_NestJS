import { Column, Model, DataType, Table, HasMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Livro } from "src/livros/livro.model";

@Table
export class Autor extends Model<Autor> {

   @Column({
       type: DataType.STRING(60),
       allowNull: false,
   })
    codigo: string;

    @Column({
        type: DataType.STRING(),
        allowNull: false,
    })
    nome: string;

    @Column({
        type: DataType.STRING(),
        allowNull: false,
    })
    area: string;    

    @HasMany(type => Livro)
    livro: Livro[] 
}