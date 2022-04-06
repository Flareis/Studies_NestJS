import { Controller, Get, Param } from "@nestjs/common";
import { LivroAutor } from "src/models/livro_autor";
import { LivroAutorService } from "src/service/livroAutor.service";


@Controller ('livroAutor')
export class LivroAutorController {
    constructor (private livroAutorService: LivroAutorService){
    }

    @Get()
    async obterTodos(): Promise<LivroAutor[]> {
        return this.livroAutorService.obterTodos();
    }

    @Get(':id')
    async obterUm (@Param() params): Promise<LivroAutor> {
        return this.livroAutorService.obterUm (params.id); 
    }
}