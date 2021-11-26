import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateItemDoCarrinhoDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    example: '321',
    description: `id do carrinho`,
  })
  carrinhoId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    example: '22',
    description: `id do produto para adiciona-lo no carrinh`,
  })
  produtoId?: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '3',
    description: `quantidade de produtos adicionada a carrinho`,
  })
  quantidade: number;
}
