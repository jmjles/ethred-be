import express, { Request, Response, Application } from 'express'
import 'dotenv/config'
import db from './db'

const app: Application = express()
const PORT = process.env.PORT || 5000

db()

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server')
})

app.listen(PORT, () => {
    console.log(`Server is Fire at http://localhost:${PORT}`)
})