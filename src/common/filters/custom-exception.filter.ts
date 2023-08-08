import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  catch(error: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const errorResponse = error?.response?.message;

    if (error instanceof HttpException) {
      response.status(error.getStatus()).json({
        statusCode: error.getStatus(),
        message: errorResponse || error.message,
        error: error.name,
      });
    } else {
      const status = error?.statusCode || 500;
      response.status(status).json({
        statusCode: status,
        message: error.message,
        error: error.message || 'Internal Server Error',
      });
    }
  }
}
