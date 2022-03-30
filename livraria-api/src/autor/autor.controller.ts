import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { Autor } from "./autor.model";
import { AutoresService } from "./autor.service";

@Controller ('autores')
export class autoresController {
    constructor (private autoresService: AutoresService){
    }

    @Get()
    async obterTodos(): Promise<Autor[]> {
        return this.autoresService.obterTodos();
    }

    @Get(':id')
    async obterUm (@Param() params): Promise<Autor> {
        return this.autoresService.obterUm (params.id); 
    }

    @Post()
    async criar(@Body() livro: Autor) {
        this.autoresService.criar(livro);
    }

    @Put()
    async alterar(@Body() livro:Autor): Promise<[number, Autor[]]> {
    
        return this.autoresService.alterar(livro);
    } 

    @Delete(':id')
    async apagar (@Param () params/* , @Res() response:Response */) {
        const confirmacao:boolean = await this.autoresService.apagar(params.id)   
        /* try{
            const confirmacao:boolean = await this.autoresService.apagar(params.id)
            //console.log (`Passei por aqui ${confirmacao}`)
            if (confirmacao){
                //return (`Autor com o ID: ${params.id} deletado com sucesso.`)
                response.status(200).send({message: `Autor com ID: ${params.id} deletado com sucesso.`})
            } else {
                //return (`Autor com o ID: ${params.id} não encontrado.`)
                response.status(404).send({ message: `Autor com o ID: ${params.id} não encontrado.`})
                
            }
        } catch(error){
            response.status(501).send({message: error.message})
        } */
    }
}