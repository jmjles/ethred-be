import { RESTDataSource } from '@apollo/datasource-rest'
import {
    getAllUsers,
    getUserById,
    addUser,
    getSuggestedUsers,
    getUsers,
    banUser,
    unBanUser,
    deleteUser,
    permaDeleteUser,
    editUser,
} from '../db/queries/userQueries'
import { EditUser, NewUser } from '../types'

export class UserAPI extends RESTDataSource {
    async getUserById(id: string) {
        return await getUserById(id)
    }
    async getAllUsers() {
        return await getAllUsers()
    }
    async getUsers(users: string[]) {
        return await getUsers(users)
    }
    async getSuggestedUsers(friends: string[], blocked: string[]) {
        return await getSuggestedUsers(friends, blocked)
    }

    async addUser(newUser: NewUser) {
        return await addUser(newUser)
    }
    async editUser(id: string, fields: EditUser) {
        return await editUser(id, fields)
    }

    async banUser(id: string) {
        return await banUser(id)
    }

    async unBanUser(id: string) {
        return await unBanUser(id)
    }

    async deleteUser(id: string) {
        return await deleteUser(id)
    }

    async permaDeleteUser(id: string) {
        return await permaDeleteUser(id)
    }
}
