import { IsEmail, IsOptional, IsNotEmpty, IsString } from 'class-validator';

export class PedidosDto {
  @IsOptional()
      /**
   * id do carrinho
   * @example 123
   */
  carrinhoId: number;

  @IsNotEmpty()
  @IsString()
      /**
   * endereço para entrega do produto
   * @example Rua Torres Homem, 265
   */
  endereco: string;

  @IsOptional()
  @IsString()
      /**
   * boleto gerado para o pagamento
   * @example "123986324325438"
   */
  boleto: string;
}
