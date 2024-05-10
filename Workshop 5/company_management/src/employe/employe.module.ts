import { Module } from '@nestjs/common';
import { EmployeController } from './employe.controller';
import { EmployeService } from './employe.service';
import { Employe } from './employe.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Employe])],
  controllers: [EmployeController],
  providers: [EmployeService],
})
export class EmployeModule {}
