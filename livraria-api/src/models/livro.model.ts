import { Table, Model, Column, DataType, HasOne, ForeignKey, BelongsTo, Scopes, BelongsToMany } from "sequelize-typescript";
import { Autor } from "src/models/autor.model";
import { LivroAutor } from "./livro_autor";

@Scopes({
    withAutor: {
        include: [{model: () => Autor}]
    }
})

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

    /* @ForeignKey(() => Autor)
    @Column({
        allowNull: false
    })
    autorId: number;

    @BelongsTo(() => Autor)
    autor: Autor */

    @BelongsToMany(() => Autor, () => LivroAutor)
    autor: Autor[]
}
