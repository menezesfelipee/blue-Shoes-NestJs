import { ApiProperty } from '@nestjs/swagger';
import { Pedidos } from '@prisma/client';
import { IsNumber, IsOptional } from 'class-validator';

export class CriarCarrinhoDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsNumber()
  @IsOptional()
  produtoId: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: '4',
    description: `quantidade de produtos no carrinho`,
  })
  quantidade: number;

  @IsOptional()
  @ApiProperty({
    example: '399,99',
    description: `valor total do carrinho`,
  })
  valor_total: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: '44',
    description: `id doo usuario logado`,
  })
  usuarioId: number;

  @IsOptional()
  pedidos: Pedidos;
}
