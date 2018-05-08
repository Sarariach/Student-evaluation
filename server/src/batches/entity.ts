import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {IsDate, IsInt, IsNumber, IsDateString} from "class-validator";

import Student from "../students/entity";

@Entity()
export default class Batch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsNumber()
  @Column('integer',{nullable:false})
  batchNumber: number

  @IsDateString()
  @Column('date')
  startDate: Date

  @IsDate()
  @Column('date')
  endDate: Date

  @OneToMany(() => Student, s => s.batch)
  students: Student[]

}