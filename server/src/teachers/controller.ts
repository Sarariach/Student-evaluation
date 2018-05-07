import { JsonController, Post, Param, Get, Body, Authorized, CurrentUser } from 'routing-controllers'
import Teacher from './entity';

@JsonController()
export default class TeacherController {

  //@Authorized //TODO: activate
  @Post('/teachers')
  async createTeacher(
    @CurrentUser() teacher: Teacher,
    @Body() new_teacher: Teacher
  ) 
  }
}
