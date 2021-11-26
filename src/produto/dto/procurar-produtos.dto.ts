import { IsOptional } from 'class-validator';

export class ProcurarProdutosQueryDto {
  @IsOptional()
    /**
   * procurar produtos pelo nome
   * @example adidas
   */
  nome: string;

  @IsOptional()
    /**
   * procurar produtos pela marca
   * @example yeezy
   */
  marca: string;
}
