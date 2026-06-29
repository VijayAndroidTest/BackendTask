import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*', methods: 'GET,POST,PUT,DELETE' });

  const port = process.env.PORT || 4001;
  await app.listen(port, '0.0.0.0');
  console.log(`Product Service running on port: ${port}`);
}

// Ensure this is only called once!
bootstrap();