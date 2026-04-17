import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
app.enableCors({
  origin: 'https://incomparable-cactus-ff4625.netlify.app',
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type,Authorization',
});
  // Render usa la variable de entorno PORT. Si no existe, usa 3000 (local).
  const port = process.env.PORT || 3000;
  
  await app.listen(port, '0.0.0.0'); // Escuchar en todas las interfaces
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();