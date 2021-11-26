import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CriarMarcaDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: 'Yeezy',
    description: `nome da marca que deseja criar`,
  })
  nome: string;

  @IsOptional()
  @ApiProperty({
    example: 'logo.png',
    description: `logo da marca para cadastro`,
  })
  logo: string;

  @IsOptional()
  logo_parceiro: string;
}
