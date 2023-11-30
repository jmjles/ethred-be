import { EditUser, NewUser } from '../../types'
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

export const getUsers = async (users: string[]) => {
    try {
        return await model.find().all('id', users)
    } catch (er) {
        console.log(er)
        return []
    }
}

export const getSuggestedUsers = async (
    friends: string[],
    blocked: string[]
) => {
    try {
        if (!friends.length) return []
        const allUsers = await model.find().all('id', friends)
        const cache: { [key: string]: any } = {}
        const cacheBlocked: { [key: string]: any } = {}
        blocked.forEach((b) => (cacheBlocked[b] = b))
        const uniqueUsers: any[] = []
        allUsers.forEach((user) => {
            user.following.forEach((follower) => {
                if (cache[follower.id] || cacheBlocked[follower.id]) return
                cache[follower.id] = follower.id
                uniqueUsers.push(follower)
            })
        })
        return uniqueUsers
    } catch (er) {
        console.log(er)
        return []
    }
}

//* Update
export const editUser = async (id: string, user: EditUser) => {
    try {
        return await model.findByIdAndUpdate(id, user, { new: true })
    } catch (er) {
        console.log(er)
        return {}
    }
}
export const banUser = async (id: string) => {
    try {
        return await model.findByIdAndUpdate(
            id,
            { banned: true },
            { new: true }
        )
    } catch (er) {
        console.log(er)
        return {}
    }
}
export const unBanUser = async (id: string) => {
    try {
        return await model.findByIdAndUpdate(
            id,
            { banned: false },
            { new: true }
        )
    } catch (er) {
        console.log(er)
        return {}
    }
}

//* Delete
export const deleteUser = async (id: string) => {
    try {
        return await model.findByIdAndUpdate(
            id,
            { deleted: true },
            { new: true }
        )
    } catch (er) {
        console.log(er)
        return {}
    }
}
export const permaDeleteUser = async (id: string) => {
    try {
        return await model.findByIdAndDelete(id, { new: true })
    } catch (er) {
        console.log(er)
        return {}
    }
}
