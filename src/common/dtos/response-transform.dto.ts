import { ApiProperty } from '@nestjs/swagger';

export class ResponseTransformerDTO<T> {
  @ApiProperty({
    description: 'Status',
    example: true,
  })
  status: boolean;

  @ApiProperty({
    description: 'Message',
    example: 'Successful',
  })
  message: string;

  data: T;

  constructor(status: boolean, message: string, data: T) {
    this.status = status;
    this.message = message;
    this.data = data;
  }

  static OK<T>(data: T, message = 'Successful') {
    return new this(true, message, data);
  }

  static CREATED<T>(data: T, message = 'Successfully created') {
    return new this(true, message, data);
  }
}
