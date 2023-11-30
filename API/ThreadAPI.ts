import { RESTDataSource } from '@apollo/datasource-rest'
import {
    deleteThreadById,
    deleteThreadsByUser,
    discoverThreads,
    editThread,
    getThreadById,
    getThreadsByUser,
} from '../db/queries/threadQueries'

export class ThreadAPI extends RESTDataSource {
    async newThread() {}
    async getThreadById(id: string) {
        return await getThreadById(id)
    }
    async getThreadsByUser(id: string) {
        return await getThreadsByUser(id)
    }
    async getThreads() {}
    async getFollowingThreads() {}
    async discoverThreads() {
        return await discoverThreads()
    }
    async editThread(id: string) {
        return await editThread()
    }
    async deleteThreadById(id: string) {
        return await deleteThreadById(id)
    }
    async deleteThreadsByUser(id: string) {
        return await deleteThreadsByUser(id)
    }
}
