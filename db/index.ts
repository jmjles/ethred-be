import mongoose from 'mongoose'
import 'dotenv/config'
const mongoURI: string = process.env.mongoURI || ''

export default async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log('DB Connected')
    } catch (er) {
        console.log('DB Connection Failed')
        console.log(er)
    }
}
