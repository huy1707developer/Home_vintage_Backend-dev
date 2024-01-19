import { body } from 'express-validator'
export enum EmailVerifyStatus {
  Unverified, // chưa xác thực email, mặc định = 0
  Verified // đã xác thực email
}

export enum TokenType {
  AccessToken, //0
  RefreshToken, //1
  ForgotPasswordToken, //2
  EmailVerificationToken //3
}

export enum UserRole {
  Admin, //0
  Staff, //1
  User //2
}

export enum AccountStatus {
  Active, //0
  Ban //1
}
