import { ObjectId } from 'mongodb'
import { AccountStatus, EmailVerifyStatus, UserRole } from '../users/user.enum'

//đặt interface vì theo chuẩn ts thôi, chứ làm thực tế thì khác
interface UserType {
  _id?: ObjectId
  full_name: string
  email: string
  password: string
  role?: UserRole
  cccd?: string
  phone_number: string
  date_of_birth?: Date
  user_avatar?: string
  created_at?: Date
  coin?: number
  email_verify_token?: string // jwt hoặc '' nếu đã xác thực email
  forgot_password_token?: string // jwt hoặc '' nếu đã xác thực email
  verify_email?: EmailVerifyStatus
  account_status?: AccountStatus
}

export default class User {
  _id?: ObjectId
  full_name: string
  email: string
  password: string
  role?: UserRole
  cccd?: string
  phone_number: string
  date_of_birth: Date
  user_avatar?: string
  created_at?: Date
  coin?: number
  email_verify_token?: string // jwt hoặc '' nếu đã xác thực email
  forgot_password_token?: string // jwt hoặc '' nếu đã xác thực email
  verify_email?: EmailVerifyStatus
  account_status?: AccountStatus

  constructor(user: UserType) {
    const date = new Date() //tạo này cho ngày created_at updated_at bằng nhau
    this._id = user._id || new ObjectId() // tự tạo id
    this.full_name = user.full_name || '' // nếu người dùng tạo mà k truyền ta sẽ để rỗng
    this.email = user.email || ''
    this.password = user.password

    this.role = user.role || UserRole.User
    this.cccd = user.cccd || ''
    this.phone_number = user.phone_number || ''
    this.date_of_birth = user.date_of_birth || new Date()
    this.user_avatar = ''
    this.created_at = user.created_at || date
    this.coin = user.coin || 0

    this.email_verify_token = user.email_verify_token || ''
    this.forgot_password_token = user.forgot_password_token || ''
    this.verify_email = user.verify_email || EmailVerifyStatus.Unverified
    this.account_status = user.account_status || AccountStatus.Active
  }
}
