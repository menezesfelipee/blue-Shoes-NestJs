import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CriarProdutoDto {
  @IsString()
  /**
   * nome do produto
   * @example Air Force 1
   */
  nome: string;

  @IsString()
    /**
   * descriçao do prooduto
   * @example O brilho perdura no Nike Air Force 1 '07, o tênis original do basquete que dá um toque de inovação naquilo que você conhece bem
   */
  descricao: string;

  @IsNumber()
  @IsOptional()
  /**
   * id da categoria do produto
   * @example 2
   */
  categoriasId: number;

  @IsString()
  /**
   * imagem do produto
   * @example https://images.lojanike.com.br/500x500/produto/tenis-nike-air-force-1-07-masculino-CW2288-111-1.jpg
   */
  imagem: string;

  @IsNumber()
  @IsOptional()
  /**
   * quantidade de vendas do mesmo produto
   * @example 6
   */
  quantidade_vendas: number;

  @IsString()
  /**
   * logotipo da marca do produto
   * @example https://w7.pngwing.com/pngs/224/696/png-transparent-nike-logo-movement-brands-black.png
   */
  logo: string;

  @IsString()
  @IsNotEmpty()
  /**
   * marca do produto
   * @example nike
   */
  
  marca: string;

  @IsNumber()
  @IsNotEmpty()
    /**
   * preço d produto
   * @example 199.99
   */
  preco: number;

  @IsOptional()
  carrinhoId: number;

  @IsNumber()
    /**
   * tamanho do produto
   * @example 39
   */
  tamanho: number;

  @IsString()
    /**
   * cor do produto
   * @example "azul"
   */
  cor: string;
}
