import { Controller, Get } from '@nestjs/common';
import { EmployeService } from './employe.service';

@Controller()
export class EmployeController {
  constructor(private readonly employeService: EmployeService) {}

  @Get()
  getHello(): string {
    return this.employeService.getHello();
  }
}
