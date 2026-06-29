import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

export interface Order {
  id: number;
  fullName: string;
  email: string;
  gender: string;
  product: any;
}

@Injectable()
export class OrderService {

  constructor(
    private readonly httpService: HttpService,
  ) {}

  private orders: Order[] = [];

  async getAvailableProducts() {
    const response = await firstValueFrom(
      this.httpService.get(
        'https://backendtask-91bz.onrender.com/products',
      ),
    );

    return response.data;
  }

  async createOrder(data: any) {

    const response = await firstValueFrom(
      this.httpService.get(
        `https://backendtask-91bz.onrender.com/products/${data.productId}`,
      ),
    );

    const product = response.data;

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const order: Order = {
      id: Date.now(),
      fullName: data["Full Name"],
      email: data.Email,
      gender: data.Gender,
      product,
    };

    this.orders.push(order);

    return {
      message: "Order Created Successfully",
      order,
    };
  }

  findAll() {
    return this.orders;
  }

  findOne(id: number) {

    const order = this.orders.find(
      o => o.id === id,
    );

    if (!order) {
      throw new NotFoundException(
        "Order not found",
      );
    }

    return order;
  }

  update(id: number, body: any) {

    const index = this.orders.findIndex(
      o => o.id === id,
    );

    if (index === -1) {
      throw new NotFoundException(
        "Order not found",
      );
    }

    this.orders[index] = {
      ...this.orders[index],
      ...body,
    };

    return this.orders[index];
  }

  remove(id: number) {

    const index = this.orders.findIndex(
      o => o.id === id,
    );

    if (index === -1) {
      throw new NotFoundException(
        "Order not found",
      );
    }

    const deleted = this.orders[index];

    this.orders.splice(index, 1);

    return {
      message: "Order deleted successfully",
      deleted,
    };
  }
}