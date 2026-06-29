import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // 1. Create the base application
  const app = await NestFactory.create(AppModule);

  // ADD THIS: Allow your Next.js app to fetch product data
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST',
  });
  // 2. Connect the Microservice (TCP)
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3001, // Use 3001 for Product, 3002 for Order
    },
  });

  // 3. Start both the microservice and the HTTP server
  await app.startAllMicroservices();
  await app.listen(4001); // This is the HTTP port for your browser access
  console.log('Application is running on: http://localhost:4001');
}
bootstrap();