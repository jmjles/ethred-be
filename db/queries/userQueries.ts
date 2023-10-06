import { NewUser } from '../../types'
import { userModel as model } from '../models/UserModel'

export const getUserById = async (id: string) => {
    try {
        const user = await model.findOne({ id })
        return user
    } catch (er: any) {
        return {}
    }
}

export const getAllUsers = async () => {
    try {
        const users = await model.where()
        return users
    } catch (er: any) {
        return {}
    }
}

export const addUser = async (newUser: NewUser) => {
    try {
        const user = await model.create(newUser)
        return user
    } catch (er: any) {
        return {}
    }
}
