import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Res } from "@nestjs/common";
import { Autor } from "../models/autor.model";
import { AutoresService } from "../service/autor.service";
import { Response } from "express";

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
    async criar(@Body() autor: Autor) {
        this.autoresService.criar(autor);
    }

    @Put()
    async alterar(@Body() autor:Autor): Promise<[number, Autor[]]> {
    
        return this.autoresService.alterar(autor);
    }  

    @Delete(':id')
    async apagar (@Param () params , @Res() response:Response) {
        const confirmacao:boolean = await this.autoresService.apagar(params.id)   
        try{
            const confirmacao:boolean = await this.autoresService.apagar(params.id)
            //console.log (`Passei por aqui ${confirmacao}`)
            if (confirmacao){
                //return (`Autor com o ID: ${params.id} deletado com sucesso.`)
                response.status(200).send({message: `Autor com ID: ${params.id} deletado com sucesso.`})
            } else {
                //return (`Autor com o ID: ${params.id} não encontrado.`)
                response.status(404).send({ message: `Autor com o ID: ${params.id} não foi encontrado.`})
                
            }
        } catch(error){
            response.status(501).send({message: error.message})
        }
    }
}