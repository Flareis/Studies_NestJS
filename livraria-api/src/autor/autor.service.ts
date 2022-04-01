import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Autor } from "./autor.model";

@Injectable()
export class AutoresService {
    constructor (
        @InjectModel (Autor)
        private autorModel: typeof Autor
    ){}

    async obterTodos(): Promise<Autor[]> {
        return this.autorModel.findAll();
    }

    async obterUm (id: number): Promise<Autor> {
        return this.autorModel.findByPk(id);
    }

    async criar (autor:Autor) {
        this.autorModel.create(autor);
    }
    
    async alterar(autor: Autor): Promise<[number, Autor[]]> {
        return this.autorModel.update(autor,{
            where:{
                id:autor.id}
            });
    }

    async apagar (id:number):Promise<boolean> {
        const autor:Autor = await this.obterUm(id);
        if (autor != null ) {
            autor.destroy();
            return true
        } else {
            return false   
        }
    }
}