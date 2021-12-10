import { Router } from 'express';
import { UserController } from '../resources/user/user.controllers';

const pixRouter = Router()
const pixController = new UserController()

pixRouter.post('/signin', pixController.signin)
pixRouter.post('/signup', pixController.signup)

export default pixRouter
