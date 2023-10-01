import { RESTDataSource } from '@apollo/datasource-rest'
import { getUserById } from '../db/queries/userQueries'

export class UserAPI extends RESTDataSource {
    async getUserById(id: string) {
        return await getUserById(id)
    }
}
