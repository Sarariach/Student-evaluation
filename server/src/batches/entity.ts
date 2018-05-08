import {BaseEntity, Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {IsDateString, IsInt, IsNumber} from "class-validator";
import Student from "../students/entity";

@Entity()
export default class Batch extends BaseEntity {

  @IsInt()
  @PrimaryColumn('integer')
  id: number

  @IsNumber()
  @Column('integer')
  batchNumber: number

  @IsDateString()
  @Column('date', {nullable:false})
  startDate: Date

  @IsDateString()
  @Column('date', {nullable:false})
  endDate: Date

  @OneToMany(() => Student, s => s.batch)
  students: Student[]

}