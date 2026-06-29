import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // If you need to list products, you should fetch them via HTTP
  // exactly how OrderService fetches them, rather than using ClientProxy.
  @Get('available-products')
  async getProducts() {
    return await this.orderService.getAvailableProducts();
  }

  @Post()
  async createOrder(@Body() body: any) {
    return await this.orderService.createOrder(body);
  }
}