import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { produtosController } from './produtos.controller';

@Module({
  imports: [],
  controllers: [AppController, produtosController],
  providers: [AppService],
})
export class AppModule {}
