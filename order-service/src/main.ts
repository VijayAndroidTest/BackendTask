import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS so your frontend can call this API
  app.enableCors({
    origin: '*', // Allows all origins for testing
    methods: 'POST,GET,PUT,DELETE',
    credentials: true,
  });

  // Use the PORT provided by Render, or 4002 locally
  const port = process.env.PORT || 4002;
  
  // Listen on 0.0.0.0 to be accessible on Render's network
  await app.listen(port, '0.0.0.0');
  
  console.log(`Order Service is running on port: ${port}`);
}
bootstrap();