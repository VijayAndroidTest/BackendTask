// order-service/src/order/order.controller.ts
import { Controller, Post, Body, Get, Inject } from '@nestjs/common';
import { OrderService } from './order.service';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy // Inject the client!
  ) {}

  @Get('available-products')
  async getProducts() {
    // Ensure the product-service is listening for 'get_all_products'
    return firstValueFrom(this.client.send({ cmd: 'get_all_products' }, {}));
  }

  @Post()
  async createOrder(@Body() body: any) {
    return await this.orderService.createOrder(body);
  }
}