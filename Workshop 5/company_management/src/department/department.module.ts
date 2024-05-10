import { Module } from '@nestjs/common';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { Department } from './department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeModule } from 'src/employe/employe.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),DatabaseModule, TypeOrmModule.forFeature([Department]),EmployeModule],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class CompanyMenagmentModule {}
