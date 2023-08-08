import { ApiProperty } from '@nestjs/swagger';

export class AddBookResponseDTO {
  @ApiProperty({
    description: 'Book Id',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Book title',
    example: 'Things fall apart',
  })
  title: string;

  @ApiProperty({
    description: 'Book Author',
    example: 'Chinua Achebe',
  })
  author: string;

  @ApiProperty({
    description: 'Book description',
    example: 'A note on the state of Africa',
  })
  description: string;

  @ApiProperty({
    description: 'Creation timestamp',
    example: '2023-07-26T17:53:46.000Z',
  })
  createdAt: string;

  @ApiProperty({
    description: 'Update timestamp',
    example: '2023-07-26T17:53:46.000Z',
  })
  updatedAt: string;
}
