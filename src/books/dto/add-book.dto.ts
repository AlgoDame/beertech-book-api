import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, IsNotEmpty, IsOptional } from 'class-validator';

export class AddBookDTO {
  @ApiProperty({ example: 'Sample Title' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  author: string;

  @ApiProperty({ example: 'A sample book description', required: false })
  @IsString()
  @MinLength(5)
  @IsOptional()
  description: string;
}
