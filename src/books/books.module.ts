import { Module } from '@nestjs/common';
import { bookProviders } from './book.provider';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';

@Module({
  providers: [...bookProviders, BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
