import { Mongoose } from 'mongoose'
import { threadSchema } from '../schemas/ThreadSchema'

export const threadModel = new Mongoose().model('Users', threadSchema)
