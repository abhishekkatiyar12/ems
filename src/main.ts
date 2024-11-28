import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 app.useGlobalPipes(new ValidationPipe())
 
 app.enableCors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: 'GET,POST,PUT,DELETE', // Allow specific methods
  credentials: true, // Allow credentials (cookies, headers, etc.)
});

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
