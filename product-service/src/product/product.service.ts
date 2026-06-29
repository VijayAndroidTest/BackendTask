// In product-service/src/product/product.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { Injectable } from '@nestjs/common';

// 1. Define the structure of your product
export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class ProductService {
  // 2. Explicitly tell TypeScript this is an array of Products
  private products: Product[] = [];

  create(product: Omit<Product, 'id'>): Product {
    const newProduct = { id: Date.now(), ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product | undefined {
    return this.products.find((product) => product.id === Number(id));
  }
}