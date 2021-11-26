import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateItemDoCarrinhoDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsNumber()
    /**
   * id do carrinho
   * @example 1234
   */

  carrinhoId?: number;

  @IsOptional()
  @IsNumber()
      /**
   * id do produto para adicionar ao carrinho
   * @example 12345
   */
  produtoId?: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
      /**
   * quantidade do produto adicionada no carrinho
   * @example 2
   */
  quantidade: number;
}
