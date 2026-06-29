// product-service/src/product/dto/create-product.dto.ts
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsNumber()
  price!: number;
}