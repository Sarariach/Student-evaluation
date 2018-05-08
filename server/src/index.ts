import 'reflect-metadata'
import { Action, BadRequestError, useKoaServer } from 'routing-controllers'
import setupDb from './db'
import TeacherController from './teachers/controller'
import LoginController from './logins/controller'
//import BatchController from './batches/controller'
import { verify } from './jwt'
import Teacher from './teachers/entity'
import * as Koa from 'koa'
import {Server} from 'http'
import * as IO from 'socket.io'
import * as socketIoJwtAuth from 'socketio-jwt-auth'
import {secret} from './jwt'
import BatchController from './batches/controller';

const app = new Koa()
const server = new Server(app.callback())
export const io = IO(server)
const port = process.env.PORT || 4000

useKoaServer(app, {
  cors: true,
  controllers: [
    TeacherController,
    LoginController,
    BatchController
    
  ],
  authorizationChecker: (action: Action) => {
    const header: string = action.request.headers.authorization
    if (header && header.startsWith('Bearer ')) {
      const [ , token ] = header.split(' ')

      try {
        return !!(token && verify(token))
      }
      catch (e) {
        throw new BadRequestError(e)
      }
    }

    return false
  },
  currentUserChecker: async (action: Action) => {
    const header: string = action.request.headers.authorization
    if (header && header.startsWith('Bearer ')) {
      const [ , token ] = header.split(' ')
      
      if (token) {
        const {id} = verify(token)
        return Teacher.findOne(id)
      }
    }
    return undefined
  }
})

io.use(socketIoJwtAuth.authenticate({ secret }, async (payload, done) => {
  const teacher = await Teacher.findOne(payload.id)
  if (teacher) done(null, teacher)
  else done(null, false, `Invalid JWT teacher ID`)
}))

io.on('connect', socket => {
  const name = socket.request.user.name
  console.log(`Teacher ${name} just connected`)

  socket.on('disconnect', () => {
    console.log(`Teacher ${name} just disconnected`)
  })
})

setupDb()
  .then(_ => {
    server.listen(port)
    console.log(`Listening on port ${port}`)
  })
  .catch(err => console.error(err))