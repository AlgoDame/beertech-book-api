import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookResponseDTO {
  @ApiProperty({
    description: 'update message',
    example: 'Book with id 1 was updated successfully.',
  })
  response: string;
}
