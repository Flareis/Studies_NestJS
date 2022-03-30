import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Livro } from './livros/livro.model';
import { livrosController } from './livros/livros.controller';
import { LivrosService } from './livros/livros.service';
import { autoresController } from './autor/autor.controller';
import { AutoresService } from './autor/autor.service';
import { Autor } from './autor/autor.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livro]), SequelizeModule.forFeature([Autor])
  ],
  controllers: [AppController, livrosController, autoresController],
  providers: [AppService, LivrosService, AutoresService],
})
export class AppModule {}
