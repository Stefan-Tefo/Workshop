import { IsInt, IsOptional, IsString, Min, IsBoolean, IsNotEmpty } from "class-validator";
import { Employe } from "../../employe/employe.entity";


export class DepartmentUpdateDto {
    @IsString()
    @IsOptional()
    name?: string

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    description?: string

    @IsBoolean()
    @IsOptional()
    is_active?: boolean

    @IsOptional()
    employees?: Employe[]

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    office_location?: string

    @IsInt()
    @Min(0)
    @IsOptional()
    @IsNotEmpty()
    budeget?: number
}

