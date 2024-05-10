import { Employe } from '../employe/employe.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


@Entity()
export class Department {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: String })
    name: string

    @Column({ type: String })
    description: string

    @Column({ type: Boolean })
    is_active: boolean
    
    @OneToMany(() => Employe, (employees) => employees.department)
    employees: Employe[]

    @Column({ type: String })
    office_location: string

    @Column({ type: Number })
    budget: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date;
}