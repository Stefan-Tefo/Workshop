import { PayType } from 'src/common/enums/common.enum';
import { Department } from '../department/department.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, JoinColumn } from 'typeorm';


@Entity()
export class Employe {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: String })
    name: string

    @Column({ type: String })
    email: string

    @Column({ type: Number })
    phone: number

    @Column({ type: Date })
    hire_date: Date

    @ManyToOne(() => Department, (department) => department.employees)
    @JoinColumn({
        name: "department_id"
    })
    department: Department

    @Column({ name: 'department_id', nullable: true })
    departmentId: string | null

    @Column({ type: Number })
    pay_rate: number

    @Column({ type: String, enum: PayType, enumName: "pay_type" })
    pay_type: PayType

    @Column({ type: Boolean })
    is_active: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date;
}