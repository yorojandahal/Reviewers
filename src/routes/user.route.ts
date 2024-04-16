/* eslint-disable @typescript-eslint/no-unused-vars */

import express from 'express'
// import { getAll } from '../controllers/todos.controller'

 //import as TodoController from '../controllers/todos.controller'
 import * as UserController  from '../controllers/user.controller';
import { validate } from '../validate';
import { createUserDto } from '../validators/create-user.validator';
// import { validate } from '../utils/validate'
// import { createTodo } from '../validators/create-post.validators'
const route = express.Router()

route.post('/login', UserController.login)
route.post('/signup', validate(createUserDto), UserController.create)
route.delete('/:id', UserController.remove)

export default route;