import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configService } from './config/config.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (!configService.isProduction()) {

    const document = SwaggerModule.createDocument(app, new DocumentBuilder()
      .setTitle('Marvel United - Location API')
      .setDescription('All about Location')
      .build());

    SwaggerModule.setup('docs', app, document);

  }

  await app.listen(5000);
}
bootstrap();