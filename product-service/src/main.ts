import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*', methods: 'GET,POST,PUT,DELETE' });

  // REMOVE the app.connectMicroservice and app.startAllMicroservices()
  // They are not needed if you are using pure REST/HTTP.

  const port = process.env.PORT || 4001;
  await app.listen(port, '0.0.0.0');
  console.log(`Product Service running on port: ${port}`);
}
bootstrap();
bootstrap();