import { NewUser } from '../../types'
import { userModel as model } from '../models/UserModel'

export const getUserById = async (id: string) => {
    try {
        return await model.findOne({ id })
    } catch (er: any) {
        console.log(er)
        return {}
    }
}

export const getAllUsers = async () => {
    try {
        return await model.find()
    } catch (er: any) {
        console.log(er)
        return []
    }
}

export const addUser = async (newUser: NewUser) => {
    try {
        return await model.create(newUser)
    } catch (er: any) {
        console.log(er)
        return {}
    }
}
