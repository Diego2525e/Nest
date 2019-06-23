import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BookSchema } from './schemas/book.schema';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [MongooseModule.forFeature([{name:'Books',schema:BookSchema}])]
})
export class BooksModule {}
