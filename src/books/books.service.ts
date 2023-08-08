import { Injectable, Inject } from '@nestjs/common';
import { Book } from './model/book.model';
import { BOOK_REPOSITORY } from '../common/constants/index';
import { AddBookDTO } from './dto/add-book.dto';
import { ResponseError } from 'src/common/interfaces/error.interface';
import { UpdateBookDTO } from './dto/update-book.dto';
@Injectable()
export class BooksService {
  constructor(
    @Inject(BOOK_REPOSITORY) private readonly bookRepository: typeof Book,
  ) {}

  async addBook(book: AddBookDTO): Promise<Book> {
    return this.bookRepository.create<Book>(book);
  }

  async getBooks(): Promise<Book[]> {
    return this.bookRepository.findAll<Book>();
  }

  async getBook(id: number): Promise<Book> {
    const book = await this.bookRepository.findByPk<Book>(id);
    if (!book) {
      const error: ResponseError = new Error('Book not found');
      error.statusCode = 404;
      throw error;
    }
    return book;
  }

  async updateBook(payload: UpdateBookDTO, id: number) {
    if (!Object.keys(payload).length) {
      const error: ResponseError = new Error('Payload is empty');
      error.statusCode = 400;
      throw error;
    }
    const book = await this.bookRepository.findByPk<Book>(id);
    if (!book) {
      const error: ResponseError = new Error('Book not found');
      error.statusCode = 404;
      throw error;
    }
    await this.bookRepository.update<Book>(payload, { where: { id } });
    return `Book with id ${id} was updated successfully.`;
  }
}
