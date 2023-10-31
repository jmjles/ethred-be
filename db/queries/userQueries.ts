import { NewUser } from '../../types'
import { userModel as model } from '../models/UserModel'

//* Create
export const addUser = async (newUser: NewUser) => {
    try {
        return await model.create(newUser)
    } catch (er: any) {
        console.log(er)
        return {}
    }
}

//* Read

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
        return await model.where()
    } catch (er: any) {
        console.log(er)
        return []
    }
}

export const getFriends = async () => {
    try {
    } catch (er) {
        console.log(er)
        return []
    }
}
export const getBlockedUsers = async () => {
    try {
    } catch (er) {
        console.log(er)
        return []
    }
}
export const getSuggestedUsers = async () => {
    try {
    } catch (er) {
        console.log(er)
        return []
    }
}

//* Update
export const editUser = async () => {
    try {
    } catch (er) {
        console.log(er)
        return []
    }
}
export const banUser = async () => {
    try {
    } catch (er) {
        console.log(er)
        return []
    }
}

//* Delete
export const deleteUser = async () => {
    try {
    } catch (er) {
        console.log(er)
        return []
    }
}
export const permaDeleteUser = async () => {
    try {
    } catch (er) {
        console.log(er)
        return []
    }
}
