import { JsonController, Get, Post, Patch, Param, Body, BodyParam, NotFoundError, HttpCode } from 'routing-controllers'
import Evaluation from './entity'
import Student from '../students/entity'
import Teacher from '../teachers/entity'

@JsonController()
export default class EvaluationController {

    @Get('/evaluations/:id([0-9]+)')
    @HttpCode(201)
    async getEvaluation(
        @Param('id') id: number
    ) {
        const evaluationById = await Evaluation.findOne(id)
        if (!evaluationById) throw new NotFoundError('Evaluation doesn\'t exist')
        if (evaluationById) {
            return { evaluationById }
        }
    }
    @Post('/evaluations')
    @HttpCode(201)
    async createEvaluation(
        @Body() evaluation: Evaluation
    ) {
        const entity = await evaluation.save()

        return entity
    }


    @Patch('/students/evaluations/:id([0-9]+)')
    async updateEvaluation(
        @Param('id') evaluationId: number,
        @Body() update
    ) {
        let evaluation = await Evaluation.findOne(evaluationId)
        evaluation = update
        if (evaluation)
            return evaluation.save()
    }
}

