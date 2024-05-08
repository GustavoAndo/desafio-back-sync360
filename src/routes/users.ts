import { Router } from "express"
import UserController from '../controllers/UserController'

const routes = Router()

routes.get('/:id', UserController.get)

routes.patch('/:id', UserController.update)

export default routes