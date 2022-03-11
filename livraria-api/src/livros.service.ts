import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService {
    livros: Livro [] = [
        /* new Livro("LIV01", "Livro TDD e BDD na prática", 29.90),
        new Livro("LIV02", "Livro inciando com Flutter", 39.90),
        new Livro("LIV03", "Livro Inteligência artificial com serviço", 29.90) */
    ];

    obterTodos(): Livro[] {
        return this.livros;
    }

    obterUm (id: number): Livro {
        return this.livros[0];
    }

    criar(livro:Livro) {
        return this.livros.push(livro);
    }

    alterar(livro: Livro): Livro {
        return livro;
    }

    apagar (id:number) {
        return this.livros.pop();
    }
}