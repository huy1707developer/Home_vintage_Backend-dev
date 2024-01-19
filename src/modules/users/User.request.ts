import { JwtPayload } from 'jsonwebtoken'
import { TokenType, UserRole, EmailVerifyStatus } from './user.enum'

export interface LogoutReqBody {
  refresh_token: string
}

export interface LoginReqBody {
  email: string
  password: string
}

export interface RegisterReqBody {
  full_name: string
  phone_number: string
  email: string
  password: string
  confirm_password: string
}

export interface TokenPayload extends JwtPayload {
  user_id: string
  token_type: TokenType
  verify: EmailVerifyStatus
  role: UserRole
  exp: number
  iat: number
}
