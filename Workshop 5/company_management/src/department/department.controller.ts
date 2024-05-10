import { Controller, Get } from '@nestjs/common';
import { DepartmentService } from './department.service';

@Controller()
export class DepartmentController {
  constructor(private readonly appService: DepartmentService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
