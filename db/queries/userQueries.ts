import { userModel as model } from '../models/UserModel'

export const getUserById = (id: string) => model.findOne({ id })
