import { Router } from 'express'

import { wrapAsync } from '~/utils/handlers'
import { loginController, logoutController, registerController } from './user.controllers'
import { accessTokenValidator, loginValidator, refreshTokenValidator, registerValidator } from './user.middlewares'

const usersRouter = Router()

usersRouter.post('/register', registerValidator, wrapAsync(registerController))

usersRouter.post('/login', loginValidator, wrapAsync(loginController))

usersRouter.post('/logout', accessTokenValidator, refreshTokenValidator, wrapAsync(logoutController))
export default usersRouter
