import { Column, Model, DataType, Table, HasMany, BelongsToMany, Scopes } from "sequelize-typescript";
import { Livro } from "src/models/livro.model";
import { LivroAutor} from "./livro_autor";

@Scopes({
    withLivro: {
        include: [{model: () => Livro}]
    }
})

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

    /* @HasMany(type => Livro)
    livro: Livro[];
 */
   @BelongsToMany(() => Livro, () => LivroAutor)
    livro: Livro[]
}