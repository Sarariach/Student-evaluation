import { JsonController, Get, Param, HttpCode, Body, Post, Authorized, NotFoundError } from 'routing-controllers'
import Batch from './entity'

@JsonController()
export default class BatchController {
  // requests all users
  @Get('/batches')
  async allBatches(){
    const batches = await Batch.find()
    if (!batches) throw new NotFoundError('Batch table doesn\'t exist')
    return {batches}
  }
  // requests one user
  @Get('/batches/:id([0-9]+)')
  async getbatch(
    @Param('id') id: number
  ){
    const batch = await Batch.findOne(id)
    if (!batch) throw new NotFoundError('Batch doesn\'t exist')
    if (batch) {
    return { batch }
  }
}
@Post('/batches')
@HttpCode(201)
async createBatch(
  @Body() batch: Batch,
) {
  const entity = await batch.save()
  return { entity }
}
  }


//   // edits a user
//   @Put('/batches/:id')
//   // @HttpCode(200)
//   async editBatch(
//     @Param('id') id: number,
//     @Body() update : Partial<Batch>
//   ){
//     const batch = await Batch.findOne(id)
//     if (!batch) throw new NotFoundError('Batch doesn\'t exist')

//     return Batch.merge(batch, update).save()
//   }
  
  // deletes a user
//   @Delete('/batches/:id')
//   async deleteBatch(
//     @Param('id') id: number
//   ) {
//     const batch = await Batch.findOne(id)
//     if (!batch) throw new NotFoundError('Batch doesn\'t exist')
//     if(batch) Batch.removeBy(id)
//     return 'successfully deleted'
//   }
