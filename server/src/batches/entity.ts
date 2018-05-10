import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
//import {/*IsDate*/ IsInt, IsNumber} from "class-validator";
//import { Type } from 'class-transformer'
import Student from "../students/entity";

@Entity()
export default class Batch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  //@IsNumber()
  @Column('integer',{nullable:false})
  batchNumber: number

  // @IsDate()
  @Column('text',{nullable:false} )
  // @Type(() => Date)
  startDate: Date

  // @IsDate()
  @Column('text', {nullable:false})
  // @Type(() => Date)
  endDate: Date

  @OneToMany(() => Student, s => s.batch)
  students: Student[]

}