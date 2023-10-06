import { RESTDataSource } from '@apollo/datasource-rest'
import { getAllUsers, getUserById, addUser } from '../db/queries/userQueries'
import { NewUser } from '../types'

export class UserAPI extends RESTDataSource {
    async getUserById(id: string) {
        return await getUserById(id)
    }
    async getAllUsers() {
        return await getAllUsers()
    }
    async addUser(user: NewUser) {
        return await addUser(user)
    }
}
