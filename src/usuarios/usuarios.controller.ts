import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Usuario } from '@prisma/client';
import { CriarUsuarioDto } from './dto/criar-usuario.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuario')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('criar')
  @UsePipes(ValidationPipe)
  criar(@Body() usuarioDto: CriarUsuarioDto): Promise<Usuario> {
    return this.usuariosService.criar(usuarioDto);
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  encontraUm(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
    return this.usuariosService.encontraUm(id);
  }

  @Put('/atualizar/:id')
  @UsePipes(ValidationPipe)
  atualizarUsuario(@Body() usuarioDto: CriarUsuarioDto, @Param('id', ParseIntPipe) id: number): Promise<Usuario>{
    return this.usuariosService.atualizarUsuario(id,usuarioDto)
  }

  @Delete('deletar/:id')
  @UsePipes(ValidationPipe)
  deletaum(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
    return this.usuariosService.deletarUsuario(id);
  }
  
}
