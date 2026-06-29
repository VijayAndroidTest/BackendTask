import { Injectable, NotFoundException } from '@nestjs/common';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class ProductService {

  private products: Product[] = [];

  create(product: Omit<Product, 'id'>): Product {

    const existing = this.products.find(
      p => p.name.toLowerCase() === product.name.toLowerCase(),
    );

    if (existing) {
      throw new Error('Product already exists');
    }

    const newProduct: Product = {
      id: Date.now(),
      ...product,
    };

    this.products.push(newProduct);

    return newProduct;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {

    const product = this.products.find(p => p.id === id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  update(id: number, body: Omit<Product, 'id'>): Product {

    const index = this.products.findIndex(p => p.id === id);

    if (index === -1) {
      throw new NotFoundException('Product not found');
    }

    this.products[index] = {
      ...this.products[index],
      ...body,
    };

    return this.products[index];
  }

  remove(id: number) {

    const index = this.products.findIndex(p => p.id === id);

    if (index === -1) {
      throw new NotFoundException('Product not found');
    }

    const deleted = this.products[index];

    this.products.splice(index, 1);

    return {
      message: 'Product deleted successfully',
      deleted,
    };
  }
}