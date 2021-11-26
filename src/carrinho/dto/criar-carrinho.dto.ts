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
    /**
   * quantidade de produtos no carrinho
   * @example 123
   */
  quantidade: number;

  @IsOptional()
    /**
   * valor total do carrinho
   * @example 100.00
   */
  valor_total: number;

  @IsNumber()
  @IsOptional()
  /**
   * id do usuario logado
   * @example 123
   */
  usuarioId: number;

  @IsOptional()
  pedidos: Pedidos;
}
