import { NestFactory } from '@nestjs/core';
import { CompanyMenagmentModule } from './department/department.module';

async function bootstrap() {
  const app = await NestFactory.create(CompanyMenagmentModule);
  await app.listen(3000);
}
bootstrap();
