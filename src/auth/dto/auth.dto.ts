import { IsString, Length, MaxLength } from 'class-validator';
import { Usuario } from '.prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @IsString()
  @MaxLength(200)

  @ApiProperty({
    example: 'example@mail.com',
    description: `email necessario para login e cadastro`,
  })
  email: string;

  @IsString()
  @Length(8, 30)

  @ApiProperty({
    example: '123@ABCd!!',
    description: `senha para cadastro entre 8 e 30 caracteres`,
  })
  senha: string;
}

export class AuthResponse {
  token: string;
  usuario: Usuario;
}
