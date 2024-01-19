import express from 'express'
import { config } from 'dotenv'

import databaseService from './modules/database/database.services'
import { defaultErrorHandler } from './modules/errors/error.middlewares'
import usersRouter from './modules/users/user.routes'

const port = process.env.PORT
const app = express()

//app handler
app.use(express.json())

databaseService.connect()
app.use('/users', usersRouter)
app.get('/', (req, res) => {
  res.send('hello world')
})

app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`server này đang chạy trên post ${port}`)
})
