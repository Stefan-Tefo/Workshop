import { IsInt, IsOptional, IsString, Min, IsBoolean } from "class-validator";


export class DepartmentUpdateDto {
    @IsString()
    @IsOptional()
    name?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsBoolean()
    @IsOptional()
    is_active?: boolean

    @IsString()
    @IsOptional()
    office_location?: string

    @IsInt()
    @Min(0)
    @IsOptional()
    budget?: number
}

