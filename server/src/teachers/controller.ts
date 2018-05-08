import { JsonController, Post, Param, Get, Body, Authorized  } from 'routing-controllers'
import Teacher from './entity';

@JsonController()
export default class TeacherController {

    @Post('/teachers')
    async createTeacher(
      @Body() teacher: Teacher
    ) {
      const {password, ...rest} = teacher
      const entity = Teacher.create(rest)
      await entity.setPassword(password)
      return entity.save()
    }

    @Authorized()
    @Get('/teachers/:id([0-9]+)')
    getTeacherById(
      @Param('id') id: number
    ) {
    return Teacher.findOne(id)
   
    }


    @Authorized()
    @Get('/teachers')
    allTeachers(){
    return Teacher.find()
    }
}