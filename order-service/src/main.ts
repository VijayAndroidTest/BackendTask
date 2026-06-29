import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Enable CORS for your Next.js Frontend
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'POST,GET,PUT,DELETE',
    credentials: true,
  });

  // 2. Setup Microservice transport
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3002, 
    },
  });

  // 3. Start microservices FIRST
  await app.startAllMicroservices();

  // 4. Start HTTP server LAST
  await app.listen(4002);
  console.log('Application is running on: http://localhost:4002');
}
bootstrap();