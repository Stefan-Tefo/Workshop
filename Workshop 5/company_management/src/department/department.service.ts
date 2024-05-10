import { Injectable } from '@nestjs/common';

@Injectable()
export class DepartmentService {
  getHello(): string {
    return 'Hello World!';
  }
}
