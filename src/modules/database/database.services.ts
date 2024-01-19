import dotenv from 'dotenv'
import { MongoClient, Db, Collection } from 'mongodb'
import User from '../users/user.schema'
import RefreshToken from '../refresh_tokens/RefreshToken.schema'

dotenv.config() // là để đọc file .env
//chúng ta cần mã hóa password với username của database

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@homevintageproject.swqyylc.mongodb.net/?retryWrites=true&w=majority`
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri)
class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }
  async connect() {
    try {
      await this.db.command({ ping: 1 }) //nếu thành công thì sẽ trả về 1
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log(error) //thông báo lỗi
      // throw error //throw error để quăng lỗi vê 1 chỗ xử lý lỗi cuối cùng
    }
  }

  get users(): Collection<User> {
    //định dạng object lấy từ db ra là user ha
    return this.db.collection(process.env.DB_USERS_COLLECTION as string)
  }

  get refreshTokens(): Collection<RefreshToken> {
    return this.db.collection(process.env.DB_REFRESH_TOKENS_COLLECTION as string)
  }
}

const databaseService = new DatabaseService()
export default databaseService
