import { Controller, Get, Res, Body, HttpStatus, Param, NotFoundException, Post, Delete, Patch } from '@nestjs/common';
import { BooksService } from './books.service';
import { ApiUseTags, ApiImplicitParam } from '@nestjs/swagger';
import { CreateBookDTO } from './dto/create-book.dto';

@ApiUseTags('Books')
@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) { }

    @Get('')
    async getAllBook(@Res() res) {
        const books = await this.booksService.getAllBook();
        return res.status(HttpStatus.OK).json(books);
    }


    @Get('/:bookID')
    @ApiImplicitParam({ name: 'bookID', type: 'string' })
    async getBook(@Res() res, @Param('bookID') bookID) {
        const book = await this.booksService.getBook(bookID);
        if (!book) throw new NotFoundException('Book does not exist!');
        return res.status(HttpStatus.OK).json(book);
    }

    @Post('/create')
    async addBook(@Res() res, @Body() createBookDTO: CreateBookDTO) {
        const book = await this.booksService.addBook(createBookDTO);
        return res.status(HttpStatus.OK).json({
            message: "Book has been created successfully",
            book
        })
    }

    @Patch('/:bookID')
    @ApiImplicitParam({ name: 'bookID', type: 'string' })
    async updateBook(@Res() res, @Param('bookID') bookID, @Body() updateBookDTO: CreateBookDTO)
    {
        const book = await this.booksService.updateBook(bookID, updateBookDTO);
        return res.status(HttpStatus.OK).json(book);
    }

    @Delete('/:bookID')
    @ApiImplicitParam({ name: 'bookID', type: 'string' })
    async deleteBook(@Res() res, @Param('bookID') bookID){
        const book = await this.booksService.deleteBook(bookID);
        return res.status(HttpStatus.OK).json(book);
    }
}
