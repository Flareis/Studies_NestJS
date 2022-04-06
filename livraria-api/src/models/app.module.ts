import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppService } from '../service/app.service';
import { Livro } from './livro.model';
import { LivrosService } from '../service/livros.service';
import { autoresController } from '../controllers/autor.controller';
import { AutoresService } from '../service/autor.service';
import { Autor } from './autor.model';
import { livrosController } from '../controllers/livros.controller';
import { AppController } from 'src/controllers/app.controller';
import { LivroAutor } from './livro_autor';
import { LivroAutorController } from 'src/controllers/livroAutor.controller';
import { LivroAutorService } from 'src/service/livroAutor.service';

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
    SequelizeModule.forFeature([Livro]), SequelizeModule.forFeature([Autor]), SequelizeModule.forFeature([LivroAutor])
  ],
  controllers: [AppController, livrosController, autoresController, LivroAutorController],
  providers: [AppService, LivrosService, AutoresService, LivroAutorService],
})
export class AppModule {}
