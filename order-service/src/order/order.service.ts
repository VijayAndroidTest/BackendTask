import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OrderService {
  constructor(@Inject('PRODUCT_SERVICE') private readonly client: ClientProxy) {}

  async createOrder(data: any) {
    try {
      // Use { cmd: 'get_product' } as your pattern
      const product = await firstValueFrom(
        this.client.send({ cmd: 'get_product' }, { id: data.productId })
      );
      
      if (!product) throw new Error('Product not found');
      return { success: true, order: { ...data, product } };
    } catch (error) {
      // This catches the 'no elements in sequence' error
      throw new NotFoundException('Product service did not return a valid product.');
    }
  }
}