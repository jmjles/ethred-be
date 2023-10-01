import { Mongoose } from 'mongoose'
import { userSchema } from '../schemas/UserSchema'

export const userModel = new Mongoose().model('Users', userSchema)
