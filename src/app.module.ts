import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [BooksModule, MongooseModule.forRoot('mongodb://localhost/books', { useNewUrlParser: true })],
})
export class AppModule {}
