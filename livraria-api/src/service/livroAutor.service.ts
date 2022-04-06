import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { LivroAutor } from "src/models/livro_autor";

@Injectable()
export class LivroAutorService {
    constructor (
        @InjectModel (LivroAutor)
        private livroAutor: typeof LivroAutor
    ){}

    async obterTodos(): Promise<LivroAutor[]> {
        return this.livroAutor.findAll();
    }

    async obterUm (id: number): Promise<LivroAutor> {
        return this.livroAutor.findByPk(id);
    }
}