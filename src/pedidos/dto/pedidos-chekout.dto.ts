import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsNotEmpty, IsString } from 'class-validator';

export class PedidosDto {
  @IsOptional()
  @ApiProperty({
    example: '321',
    description: `id do carrinh para checkout`,
  })
  carrinhoId: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'rua Torres Homem, 265',
    description: `endereço para entrega do pedido`,
  })
  endereco: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: '1287356128317100529990',
    description: `boleto gerado para pagamento`,
  })
  boleto: string;
}
