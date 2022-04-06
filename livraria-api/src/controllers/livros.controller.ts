import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { Response } from "express";
//import { runInThisContext } from "vm";
import { Livro } from "../models/livro.model";
import { LivrosService } from "src/service/livros.service";
import { ok } from "assert";


@Controller ('livros')
export class livrosController {
    constructor(private livrosService: LivrosService) {
    }
   
    @Get()
    async obterTodos(): Promise<Livro[]> {
        return this.livrosService.obterTodos();
    }

    @Get(':id')
    async obterUm (@Param() params): Promise<Livro> {
        return this.livrosService.obterUm (params.id); 
    }

    @Post()
    async criar(@Body() livro: Livro) {
        this.livrosService.criar(livro);
    }

    @Put()
    async alterar(@Body() livro:Livro): Promise<[number, Livro[]]> {
    
        return this.livrosService.alterar(livro);
    } 

    @Delete(':id')
    async apagar (@Param () params, @Res() response:Response) {
       try{
            const confirmacao:boolean = await this.livrosService.apagar(params.id)
            //console.log (`Passei por aqui ${confirmacao}`)
            if (confirmacao){
                //return (`Livro com o ID: ${params.id} deletado com sucesso.`)
                response.status(200).send({message: `Livro com ID: ${params.id} deletado com sucesso.`})
            } else {
                //return (`Livro com o ID: ${params.id} não encontrado.`)
                response.status(404).send({ message: `Livro com o ID: ${params.id} não encontrado.`})
                
            }
        } catch(error){
            response.status(501).send({message: error.message})
        }
    }
}