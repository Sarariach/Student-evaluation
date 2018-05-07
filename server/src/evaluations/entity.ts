import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {IsDateString, IsString, MinLength} from "class-validator";
import Student from "../students/entity";
import Teacher from "../teachers/entity";

@Entity()
export default class Evaluation extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @MinLength(1)
  @Column('text')
  color: string

  @IsString()
  @Column('text')
  remark: string

  @IsDateString()
  @Column('date')
  date: Date

  @ManyToOne(() => Student, s => s.evaluations)
  student: Student

  @ManyToOne(() => Teacher, t => t.evaluations)
  teacher: Teacher

}