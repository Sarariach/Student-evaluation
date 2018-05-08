import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId} from "typeorm";
import {IsString, IsUrl} from "class-validator";
import Evaluation from '../evaluations/entity';
import Batch from '../batches/entity';


@Entity()
export default class Student extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text',{nullable:false})
  firstName: string

  @IsString()
  @Column('text', {nullable:false})
  lastName: string

  @IsUrl()
  @Column('text',{nullable:false})
  picture: string

  @OneToMany(() => Evaluation, e => e.student)
  evaluations: Evaluation[]

  @ManyToOne(() => Batch, b => b.students)
  batch: Batch

  @RelationId((student: Student) => student.batch)
  batchId: number

}