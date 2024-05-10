import { Injectable } from '@nestjs/common';
import { Department } from './department.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DepartmentCreateDto } from './dto/department-create.dto';
import { DepartmentUpdateDto } from './dto/department-update..dto';

@Injectable()
export class DepartmentService {
  art: Promise<Department[]>;

  constructor(@InjectRepository(Department) private departmentRepository: Repository<Department>,) { }

  getAllDepartments(): Promise<Department[]> {
    return this.departmentRepository.find({ relations: ["employees"] })
  }

  createDepartment(body: DepartmentCreateDto): Promise<Department> {
    const newDepartment = this.departmentRepository.create(body)

    return this.departmentRepository.save(newDepartment)
  }

  async updateDepartment(id: string, updatedDepartmentData: DepartmentUpdateDto): Promise<Department> {

    const department = await this.departmentRepository.findOneByOrFail({ id })

    const updateDepartment = this.departmentRepository.merge(department, updatedDepartmentData)

    return this.departmentRepository.save(updateDepartment)
  }

  async deleteDepartment(id: string): Promise<void> {
    await this.departmentRepository.softDelete(id);
  }
}

