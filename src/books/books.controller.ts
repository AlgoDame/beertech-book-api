import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { AddBookDTO } from './dto/add-book.dto';
import { ResponseTransformerDTO } from 'src/common/dtos/response-transform.dto';
import { CustomAPIOkResponse } from 'src/common/decorators/custom-ok-response.decorator';
import { AddBookResponseDTO } from './dto/add-book-response.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateBookDTO } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({ summary: 'Add a new book' })
  @ApiBody({ type: AddBookDTO })
  @CustomAPIOkResponse(AddBookResponseDTO)
  async addBook(@Body() payload: AddBookDTO) {
    const book = await this.booksService.addBook(payload);
    return ResponseTransformerDTO.CREATED(book);
  }

  @Get()
  @ApiOperation({ summary: 'Get all books' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all books',
    type: AddBookResponseDTO,
    isArray: true,
  })
  async getBooks() {
    const books = await this.booksService.getBooks();
    return ResponseTransformerDTO.OK(books);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a book' })
  @CustomAPIOkResponse(AddBookResponseDTO)
  async getBook(@Param('id') id: string) {
    const book = await this.booksService.getBook(+id);
    return ResponseTransformerDTO.OK(book);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a book' })
  @ApiBody({ type: UpdateBookDTO })
  async updateBook(@Body() payload: UpdateBookDTO, @Param('id') id: string) {
    const response = await this.booksService.updateBook(payload, +id);
    return ResponseTransformerDTO.OK(response);
  }
}
