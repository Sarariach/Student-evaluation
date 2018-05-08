// import { JsonController, Get, Post, Patch, Param, Body, BodyParam, NotFoundError, HttpCode } from 'routing-controllers'
// import Evaluation  from './entity'
// import Student from '../students/entity'
// import Teacher from '../teachers/entity'

// @JsonController()
// export default class EvaluationController {

//   @Get('/evaluations/students/:id([0-9]+)')
//   @HttpCode(201)
//   async getEvaluations(
//     @Param('id') id: number
//   ) {
//     const evaluationById = await Evaluation.findOne(id)
//     if (!evaluationById) throw new NotFoundError('Evaluation doesn\'t exist')
//     if (evaluationById) {
//       return {evaluationById}
//     }
//   }





// }