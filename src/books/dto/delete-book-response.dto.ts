import { ApiProperty } from '@nestjs/swagger';

export class DeleteBookResponseDTO {
  @ApiProperty({
    description: 'update message',
    example: 'Book with id 1 was deleted successfully.',
  })
  response: string;
}
