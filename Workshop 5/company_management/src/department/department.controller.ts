import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Department } from './department.entity';
import { DepartmentCreateDto } from './dto/department-create.dto';
import { DepartmentUpdateDto } from './dto/department-update..dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidUnknownValues: true,
    transform: true,
  }),
)
@Controller("department")
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) { }

  @Get()
  getAllDepartments(): Promise<Department[]> {
    return this.departmentService.getAllDepartments();
  }

  @Post()
  createDepartment(@Body() body: DepartmentCreateDto): Promise<Department> {
    return this.departmentService.createDepartment(body)
  }

  @Put(":id")
  updateDepartment(@Body() body: DepartmentUpdateDto, @Param('id') id: string): Promise<Department> {
    return this.departmentService.updateDepartment(id, body)
  }

  @Delete(":id")
  deleteDepartment(@Param('id') id: string): Promise<void> {
    return this.departmentService.deleteDepartment(id)
  }
}
