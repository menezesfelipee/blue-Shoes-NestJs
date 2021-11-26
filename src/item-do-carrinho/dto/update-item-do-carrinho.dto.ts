import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CreateItemDoCarrinhoDto } from './create-item-do-carrinho.dto';

export class UpdateItemDoCarrinhoDto extends PartialType(
  CreateItemDoCarrinhoDto,
) {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    example: '123',
    description: `id do carrinho para atualizar`,
  })
  carrinhoId?: number | null;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    example: '12',
    description: `id do produto presente no carrinho`,
  })
  produtoId?: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '3',
    description: `quantidade de produto`,
  })
  quantidade: number;
}
