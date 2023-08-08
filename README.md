# Book API
This is a sample REST API for managing books using NestJS.

## Setup
- Clone the repository
- Install dependencies: `npm install`

## Setup database:
- Create a PostgreSQL database. Example sql : `CREATE DATABASE books_api;`
- Update `.env` using `.env.sample` database

## Usage
- Start the server: `npm run start:dev`

The server will start on port 3000 by default

## Environment Variables
```
DB_NAME - Database name
DB_USER - Database username
DB_PASS - Database password
DB_HOST - Database host
DB_PORT - Database port
```

## Endpoints
The API exposes the following endpoints:

Books
- GET /books - Get all books
- POST /books - Create a new book
- GET /books/:id - Get a book by ID
- PUT /books/:id - Update a book
- DELETE /books/:id - Delete a book

## Documentation
The API uses Swagger for documentation
Run the server and view docs at `/docs`

## Project Structure
- src/books : Book API routes, controllers, services
- src/common : Shared code like filters, decorators, etc
- src/database : Database config and models
- test : Unit and integration tests
## Testing
Run tests: npm run test
