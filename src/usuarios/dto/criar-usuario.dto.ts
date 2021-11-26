import { ApiProperty } from '@nestjs/swagger';
import { Pedido } from '@prisma/client';
import {
  IsString,
  Length,
  IsEmail,
  IsOptional,
  MaxLength,
  IsNotEmpty,
  Matches,
} from 'class-validator';
import { Cpf } from 'src/common/customCpf';
import { UserRole } from '../usuario-roles.enum';

export class CriarUsuarioDto {
  @IsString()
  @Length(2, 100)
  @MaxLength(100)
  @IsOptional()
  @ApiProperty({
    example: 'Lucas',
    description: `nome para visualizaçao do usuario`,
  })
  nome: string;

  @IsOptional()
  @Length(2, 100)
  @MaxLength(100)
  @IsString()
  @ApiProperty({
    example: 'menezes',
    description: `sobrenome para visualizaçao do usuario`,
  })
  sobrenome: string;

  @IsOptional()
  @IsEmail()
  @IsString()
  @ApiProperty({
    example: 'example@mail.com',
    description: `email do usuario para cadastro e login`,
  })
  email: string;

  @IsOptional()
  @Cpf()
  @IsString()
  @IsNotEmpty({ message: 'Infome o CPF' })
  @ApiProperty({
    example: '41182275842',
    description: `cpf d usuario`,
  })
  cpf: string;

  @Length(8, 20)
  @IsOptional()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  @IsString()
  @ApiProperty({
    example: '123@ABCd##',
    description: `senha do usuario entre 8 a 20 caracteres, obrigatorio letra maiuscula simbolos e numeros`,
  })
  senha: string;

  @IsOptional()
  pedido: Pedido;

  @IsOptional()
  role: UserRole;

  @IsOptional()
  @ApiProperty({
    example: '123',
    description: `id do carrinho para mante-lo salvo antes e após login`,
  })
  carrinhoId: number;
}
