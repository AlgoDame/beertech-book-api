import { Body, Controller, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { AddBookDTO } from './dto/add-book.dto';
import { ResponseTransformerDTO } from 'src/common/dtos/response-transform.dto';
import { CustomAPIOkResponse } from 'src/common/decorators/custom-ok-response.decorator';
import { AddBookResponseDTO } from './dto/add-book-response.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({ summary: 'Add a new book' })
  @ApiBody({ type: AddBookDTO })
  @CustomAPIOkResponse(AddBookResponseDTO)
  addBook(@Body() payload: AddBookDTO) {
    const book = this.booksService.addBook(payload);
    return ResponseTransformerDTO.OK(book);
  }
}
