import {Request, Response, Router} from 'express'
import { UserController } from '../resources/user/user.controllers'

const usersRouter = Router()
const userController = new UserController()

usersRouter.post('/signin', userController.signin)

usersRouter.post('/signup', userController.signup)

export default usersRouter