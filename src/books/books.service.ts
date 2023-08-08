import { Injectable, Inject } from '@nestjs/common';
import { Book } from './model/book.model';
import { BOOK_REPOSITORY } from '../common/constants/index';
import { AddBookDTO } from './dto/add-book.dto';
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

  //   async findOneByEmail(email: string): Promise<User> {
  //     return await this.bookRepository.findOne<User>({ where: { email } });
  //   }

  //   async findOneById(id: number): Promise<User> {
  //     return await this.bookRepository.findOne<User>({ where: { id } });
  //   }
}
