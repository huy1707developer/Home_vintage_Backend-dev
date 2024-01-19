import { AccountStatus, EmailVerifyStatus, UserRole } from './user.enum'
import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import userServices from './user.services'
import { LoginReqBody, LogoutReqBody, RegisterReqBody } from './User.request'
import { USERS_MESSAGES } from './user.message'
import User from './user.schema'
import { ObjectId } from 'mongodb'

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  const result = await userServices.register(req.body)
  res.json({
    message: USERS_MESSAGES.REGISTER_SUCCESS
  })
}

export const loginController = async (req: Request<ParamsDictionary, any, LoginReqBody>, res: Response) => {
  const user = req.user as User
  const user_id = user._id as ObjectId
  const { verify_email, role, account_status } = user
  const result = await userServices.login({
    user_id: user_id.toString(),
    verify_email: verify_email as EmailVerifyStatus,
    role: role as UserRole,
    account_status: account_status as AccountStatus
    //verify: user.verify làm như này ăn bug, do tay cho verify là optional
  })
  res.json({
    message: USERS_MESSAGES.LOGIN_SUCCESS,
    result
  })
}

export const logoutController = async (req: Request<ParamsDictionary, any, LogoutReqBody>, res: Response) => {
  const { refresh_token } = req.body
  const result = await userServices.logout(refresh_token)
  res.json(result)
}
