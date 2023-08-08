import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { AddBookDTO } from './dto/add-book.dto';

describe('BooksController', () => {
  let controller: BooksController;
  const mockBooksService = {
    addBook: jest.fn(),
    getBooks: jest.fn(),
    getBook: jest.fn(),
    updateBook: jest.fn(),
    deleteBook: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        {
          provide: BooksService,
          useValue: mockBooksService,
        },
      ],
    }).compile();

    controller = module.get<BooksController>(BooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should add a new book', async () => {
    const book: AddBookDTO = {
      title: 'Example Book',
      author: 'John Doe',
      description: 'Example book description',
    };

    const createdBook = {
      id: 1,
      ...book,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    mockBooksService.addBook.mockResolvedValue(createdBook);

    const result = await controller.addBook(book);

    expect(result.data).toEqual(createdBook);
    expect(result.message).toEqual('Successfully created');
    expect(result.statusCode).toEqual(201);
  });

  describe('getBooks', () => {
    it('should return a list of books', async () => {
      const mockBooks = [
        {
          id: 1,
          title: 'Book 1',
          author: 'John Doe',
          description: 'Book 1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: 'Book 2',
          author: 'Jane Doe',
          description: 'Book 2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: 'Book 3',
          author: 'Foo Bar',
          description: 'Book 3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      mockBooksService.getBooks.mockResolvedValue(mockBooks);

      const result = await controller.getBooks();

      expect(result.statusCode).toBe(200);
      expect(result.message).toBe('Successful');
      expect(result.data).toEqual(mockBooks);
    });
  });

  describe('getBook', () => {
    it('should return a book by id', async () => {
      const bookId = 1;
      const book = {
        id: bookId,
        title: 'Book 1',
        author: 'John Doe',
        description: 'Book 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockBooksService.getBook.mockResolvedValue(book);
      const result = await controller.getBook(bookId.toString());
      expect(result.statusCode).toBe(200);
      expect(result.message).toBe('Successful');
      expect(result.data).toEqual(book);
    });
  });

  describe('updateBook', () => {
    it('should update a book', async () => {
      const bookId = 1;
      const updatePayload = {
        title: 'Americanah',
      };

      const updateResponse = {
        response: `Book with id ${bookId} was updated successfully.`,
      };

      mockBooksService.updateBook.mockResolvedValue(updateResponse);

      const result = await controller.updateBook(
        updatePayload,
        bookId.toString(),
      );

      expect(result.statusCode).toBe(200);
      expect(result.message).toBe('Successful');
      expect(result.data.response).toBeDefined();
      expect(result.data.response).toEqual(updateResponse.response);
    });
  });

  describe('deleteBook', () => {
    it('should delete a book', async () => {
      const bookId = 1;
      const deleteResponse = {
        response: `Book with id ${bookId} was deleted successfully.`,
      };

      mockBooksService.deleteBook.mockResolvedValue(deleteResponse);

      const result = await controller.deleteBook(bookId.toString());

      expect(result.statusCode).toBe(200);
      expect(result.message).toBe('Successful');
      expect(result.data.response).toBeDefined();
      expect(result.data.response).toEqual(deleteResponse.response);
    });
  });
});
