import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional } from 'class-validator';
import { CriarProdutoDto } from './criar-produtos.dto';

export class AtualizarProdutoDto extends PartialType(CriarProdutoDto) {
  @IsOptional()
  @IsNumber()
  @ApiProperty({
    example: '321',
    description: `id do carrinho para atualizar produto`,
  })
  carrinhoId: number;

  @IsArray()
  @IsOptional()
  tamanho: number[];
}
