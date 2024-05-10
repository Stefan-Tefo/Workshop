import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeService {
  getHello(): string {
    return 'Hello World!';
  }
}
