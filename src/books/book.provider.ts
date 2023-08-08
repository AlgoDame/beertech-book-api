import { Book } from './model/book.model';
import { BOOK_REPOSITORY } from '../common/constants/index';

export const bookProviders = [
  {
    provide: BOOK_REPOSITORY,
    useValue: Book,
  },
];
