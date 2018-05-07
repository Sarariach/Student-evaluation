import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Exclude } from 'class-transformer';
import { MinLength, IsString, IsEmail } from 'class-validator';
import * as bcrypt from 'bcrypt'
import  Evaluation from '../evaluations/entity';

@Entity()
export default class Teacher extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @MinLength(2)
  @Column('text', {nullable:true})
  Name: string

  @IsEmail()
  @Column('text', {nullable:false})
  email: string

  @IsString()
  @MinLength(8)
  @Column('text', {nullable:false})
  @Exclude({ toPlainOnly: true })
  password: string

  @OneToMany(() => Evaluation, e => e.teacher)
  evaluations: Evaluation[]

  async setPassword(rawPassword: string) {
    const hash = await bcrypt.hash(rawPassword, 10)
    this.password = hash
  }

  checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password)
  }

  // this is a relation, read more about them here:
  // http://typeorm.io/#/many-to-one-one-to-many-relations
 // @OneToMany(_ => Player, player => player.user) 
  //players: Player[]
}