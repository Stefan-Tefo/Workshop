import { IsInt, IsNotEmpty, IsString, Min, IsBoolean, IsOptional } from "class-validator";
import { Transform } from 'class-transformer';
import { Employe } from "../../employe/employe.entity";


export class DepartmentCreateDto {

    @IsString()
    @IsNotEmpty()
    @Transform(({ value }) => value.trim())
    name: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsBoolean()
    is_active: boolean

    @IsOptional()
    employees?: Employe[]

    @IsString()
    @IsNotEmpty()
    office_location: string

    @IsInt()
    @Min(0)
    @IsNotEmpty()
    budget: number
}