import mongoose from 'mongoose'
import { userSchema } from '../schemas/UserSchema'

export const userModel = mongoose.model('Users', userSchema)
