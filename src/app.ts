import express, { Application, Request, Response } from 'express'
require('dotenv').config()

const app: Application = express()

const port: any = process.env.PORT

app.use('/', (req: Request, res: Response): void => {
  res.send('Hello world and many more!')
})

app.listen(port, (): void => {
  console.log('SERVER IS UP ON PORT:', port)
})
