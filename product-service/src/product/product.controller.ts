// product-service/src/product/product.controller.ts
import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './Create-product.dto'; // Import the DTO
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UsePipes(new ValidationPipe()) // Ensures validation runs here
  create(@Body() createDto: CreateProductDto) { // Use the DTO class
    return this.productService.create(createDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  // THIS IS THE MISSING LINK FOR YOUR ORDER SERVICE
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(Number(id));
  }

@MessagePattern({ cmd: 'get_product' })
handleGetProduct(data: { id: number }) {
  console.log("Product Service received request for ID:", data.id);
  console.log("Currently stored products:", this.productService.findAll()); 
  
  const product = this.productService.findOne(data.id);
  console.log("Found product:", product);
  
  return product || null; 
}

}