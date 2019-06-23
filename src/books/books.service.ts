import { Injectable, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './interfeca/book.interface'
import { CreateBookDTO } from './dto/create-book.dto'

@Injectable()
export class BooksService {
    constructor(@InjectModel('Books') private readonly bookModel: Model<Book>) { }
    async getAllBook():Promise<Book[]>{
        const books = await this.bookModel.find().exec();
        return books;
    }

    async getBook(bookID):Promise<Book>{
        const book = await this.bookModel.findById(bookID).exec();
        return book; 
    }
    async addBook(createBookDTO: CreateBookDTO): Promise<Book>{
        const newBook = await this.bookModel(createBookDTO);
        return newBook.save() 
    }
    async updateBook(bookID, createBookDTO:CreateBookDTO):Promise<Book>{
        const updateBook = await this.bookModel.findByIdAndUpdate(bookID,createBookDTO,{new: true});
        return updateBook;
    }
    async deleteBook(bookID):Promise<any>{
        const deleteBook = await this.bookModel.findByIdAndRemove(bookID);
        return deleteBook;
    }
}