import { JsonController, Post, Body, Authorized, BodyParam, Get, Param, NotFoundError, Delete, HttpCode, Put,BadRequestError } from 'routing-controllers'
import  Student  from './entity'
import Batch  from '../batches/entity'

@JsonController()
export default class StudentController {

    @Get('/students')
    async allStudents(){
      const students = await Student.find()
      if (!students) throw new NotFoundError('Students table doesn\'t exist')
      return {students}
    }

    @Get('/students/:id([0-9]+)')
    async getStudentById(
    @Param('id') id: number
    ) {
    const studentById = await Student.findOne(id)
    if (!studentById) throw new NotFoundError('Student doesn\'t exist')
    if (studentById) {
      return {studentById}
    }
  }
    @Post('/students')
    async createStudent(
        @Body() student: Student,
        @BodyParam('batchId', {required: true}) batchId: number
    ) {
        const batch = await Batch.findOne(batchId)
        if(batch instanceof Batch) student.batch = batch
        const entity = await student.save()
        return { entity }
    }

    @Put('/students/:id')
    async editStudent(
    @Param('id') id: number,
    @Body() update: Partial<Student>
  ) {
    const student = await Student.findOne(id)
    if (!student) throw new NotFoundError('Student doesn\'t exist')

    return Student.merge(student, update).save()
  }

    @Delete('/students/:id([0-9]+)')
    async deleteStudent(
    @Param('id') id: number
    ) {
    const student = await Student.findOne(id)
    if (!student) throw new NotFoundError('Student doesn\'t exist')
    if(student) Student.remove(student)
    return 'successfully deleted'
  }
}
