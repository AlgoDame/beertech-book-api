import { ApiProperty } from '@nestjs/swagger';

export class ResponseTransformerDTO<T> {
  @ApiProperty({
    description: 'Status',
    example: 200,
  })
  statusCode: number;

  @ApiProperty({
    description: 'Message',
    example: 'Successful',
  })
  message: string;

  data: T;

  constructor(statusCode: number, message: string, data: T) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

  static OK<T>(data: T, message = 'Successful') {
    return new this(200, message, data);
  }

  static CREATED<T>(data: T, message = 'Successfully created') {
    return new this(201, message, data);
  }
}
