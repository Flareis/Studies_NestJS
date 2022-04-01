import { Table, Model, Column, DataType, HasOne, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Autor } from "src/autor/autor.model";

@Table
export class Livro extends Model<Livro> {

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
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    preco: number;   

    @ForeignKey(() => Autor)
    @Column({
        allowNull: false
    })
    autorId: number;

    @BelongsTo(() => Autor)
    autor: Autor
}