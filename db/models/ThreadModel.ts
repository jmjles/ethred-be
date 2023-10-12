import mongoose from 'mongoose'
import { threadSchema } from '../schemas/ThreadSchema'

export const threadModel = mongoose.model('Users', threadSchema)
