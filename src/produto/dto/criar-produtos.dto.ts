
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CriarProdutoDto {
  @IsString()
  @ApiProperty({
    example: 'Air Force 1',
    description: `nome do produto que sera cadastrado`,
  })
  nome: string;

  @IsString()
  @ApiProperty({
    example: 'O brilho perdura no Nike Air Force 1 07, o tênis original do basquete que dá um toque de inovação...',
    description: `descriçao do produto`,
  })
  descricao: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: '123',
    description: `id de categria`,
  })
  categoriasId: number;

  @IsString()
  @ApiProperty({
    example: 'https://images.lojanike.com.br/500x500/produto/tenis-nike-air-force-1-07-masculino-CW2288-111-1.jpg',
    description: `imagem do produto que deseja cadastrar`,
  })
  imagem: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    example: '6',
    description: `quantidade de vendas do produto`,
  })
  quantidade_vendas: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '1',
    description: `id da marca do produto`,
  })
  marcaId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    example: '199,99',
    description: `preço do produto que ira cadastrar`,
  })
  preco: number;

  @IsOptional()
  @ApiProperty({
    example: '123',
    description: `id do carrinho`,
  })
  carrinhoId: number;

  @IsArray()
  tamanho: number[];

  @IsString()
  @ApiProperty({
    example: 'red',
    description: `cor do produto`,
  })
  cor: string;
}
