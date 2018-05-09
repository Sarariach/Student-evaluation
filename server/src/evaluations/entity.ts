import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {IsDate, IsString, MinLength} from "class-validator";
import {Type} from 'class-transformer';
import Student from "../students/entity";
import Teacher from "../teachers/entity";

@Entity()
export default class Evaluation extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  color: string

  @IsString()
  @Column('text')
  remark: string

  @IsDate()
  @Column('date')
  @Type(() => Date)
  date: Date

  @ManyToOne(() => Student, s => s.evaluations)
  student: Student

  @ManyToOne(() => Teacher, t => t.evaluations)
  teacher: Teacher

}