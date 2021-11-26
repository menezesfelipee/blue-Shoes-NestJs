import { IsString, Length, MaxLength } from 'class-validator';
import { Usuario } from '.prisma/client';

export class LoginDto {
  @IsString()
  @MaxLength(200)

  /**
   * O e-mail é necessário apra o login, 
   * @example email@email.com
   */
  email: string;

  @IsString()
  @Length(8, 30)

  /**
   * a senha é necessaria para o login, entre 8 a  30 caracteres 
   * @example 123@abcd
   */
  senha: string;
}

export class AuthResponse {
  token: string;
  usuario: Usuario;
}
