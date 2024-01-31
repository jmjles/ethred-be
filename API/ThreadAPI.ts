import { RESTDataSource } from '@apollo/datasource-rest'
import {
    deleteThreadById,
    deleteThreadsByUser,
    discoverThreads,
    editThread,
    getFollowingThreads,
    getThreadById,
    getThreads,
    getThreadsByUser,
    newThread,
} from '../db/queries/threadQueries'
import type {
    EditThread,
    NewThread,
    ThreadPop,
    ThreadTime,
} from '../types.d.ts'

export class ThreadAPI extends RESTDataSource {
    async newThread(thread: NewThread) {
        return await newThread(thread)
    }
    async getThreadById(id: string) {
        return await getThreadById(id)
    }
    async getThreadsByUser(id: string) {
        return await getThreadsByUser(id)
    }
    async getThreads(popularity: ThreadPop, time: ThreadTime) {
        return await getThreads(popularity, time)
    }
    async getFollowingThreads(following: string[]) {
        return await getFollowingThreads(following)
    }
    async discoverThreads() {
        return await discoverThreads()
    }
    async editThread(id: string, updatedThread: EditThread) {
        return await editThread(id, updatedThread)
    }
    async deleteThreadById(id: string) {
        return await deleteThreadById(id)
    }
    async deleteThreadsByUser(id: string) {
        return await deleteThreadsByUser(id)
    }
}
