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
    /**
   * nome do usuario apoos o login
   * @example Lucas
   */
  nome: string;

  @IsOptional()
  @Length(2, 100)
  @MaxLength(100)
  @IsString()
    /**
   * sobrenome do usuario
   * @example Menezes
   */
  sobrenome: string;

  @IsOptional()
  @IsEmail()
  @IsString()
  email: string;

  @IsOptional()
  @Cpf()
  @IsString()
  @IsNotEmpty({ message: 'Infome o CPF' })
    /**
   * inserir cpf do usuario
   * @example 411.822.758.42
   */
  cpf: string;

  @Length(8, 20)
  @IsOptional()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  @IsString()
    /**
   * escolha da senha do usuario
   * @example 123@!Abc
   */
  senha: string;

  @IsOptional()
  pedido: Pedido;

  @IsOptional()
  role: UserRole;

  @IsOptional()
    /**
   * id do carrinho salvo para continuar a compra
   * @example 123
   */
  carrinhoId: number;
}
