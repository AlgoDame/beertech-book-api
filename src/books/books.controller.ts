import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { AddBookDTO } from './dto/add-book.dto';
import { ResponseTransformerDTO } from 'src/common/dtos/response-transform.dto';
import { CustomAPIOkResponse } from 'src/common/decorators/custom-ok-response.decorator';
import { AddBookResponseDTO } from './dto/add-book-response.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

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
}
