import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
app.enableCors({
  origin: 'https://stripe-api-gewm.onrender.com', // La URL que te dio Netlify
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type,Authorization',
});
  // Render usa la variable de entorno PORT. Si no existe, usa 3000 (local).
  const port = process.env.PORT || 3000;
  
  await app.listen(port, '0.0.0.0'); // Escuchar en todas las interfaces
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();