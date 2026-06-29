import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OrderService {
  constructor(private readonly httpService: HttpService) {}
// Helper method for the controller
  async getAvailableProducts() {
    const url = 'https://backendtask-91bz.onrender.com/products';
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data;
  }
  async createOrder(data: any) {
    try {
      // Replace with your actual deployed Product Service URL
      const PRODUCT_SERVICE_URL = 'https://backendtask-91bz.onrender.com/products';
      
      console.log("Fetching product from:", `${PRODUCT_SERVICE_URL}/${data.productId}`);

      // Perform HTTP GET request
      const response = await firstValueFrom(
        this.httpService.get(`${PRODUCT_SERVICE_URL}/${data.productId}`)
      );

      const product = response.data;
      if (!product) throw new Error('Product not found');

      return { success: true, order: { ...data, product } };
    } catch (error) {
      console.error("Communication error:", error.message);
      throw new NotFoundException('Product service did not return a valid product.');
    }
  }
}