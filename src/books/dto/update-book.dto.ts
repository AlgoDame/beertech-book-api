import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateBookDTO {
  @ApiProperty({ example: 'Sample Title' })
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  @IsOptional()
  author?: string;

  @ApiProperty({ example: 'A sample book description' })
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  @IsOptional()
  description?: string;
}
