import { Column, Model, DataType, Table } from "sequelize-typescript";

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
}