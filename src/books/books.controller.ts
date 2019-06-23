import { Controller, Get, Res, Body, HttpStatus, Param, NotFoundException, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { ApiUseTags } from '@nestjs/swagger';
import { CreateBookDTO } from './dto/create-book.dto';

@ApiUseTags('Books')
@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService){}

    @Get('')
    async getAllBook(@Res() res){
        const books = await this.booksService.getAllBook();
        return res.status(HttpStatus.OK).json(books);
    } 
    
    @Get('/:bookID')
    async getBook(@Res() res, @Param('bookID') bookID){
        const book = await this.booksService.getBook(bookID);
        if(!book) throw new NotFoundException('Book does not exist!');
        return res.status(HttpStatus.OK).json(book);
    }

    @Post('/create')
    async addCustomer(@Res() res, @Body() createCustomerDTO: CreateBookDTO){
    const book = await this.booksService.addBook(createCustomerDTO);
    return res.status(HttpStatus.OK).json({
        message: "Book has been created successfully",
        book
        })
    }
}
