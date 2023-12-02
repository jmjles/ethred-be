import { ThreadAPI } from '../../API/ThreadAPI'
import { EditThread, NewThread, ThreadPop, ThreadTime } from '../../types'

export const threadResolvers = {
    Query: {
        getThreadById: async (
            _: any,
            { id }: { id: string },
            { thread }: { thread: ThreadAPI }
        ) => {
            try {
                return await thread.getThreadById(id)
            } catch (er) {
                console.log(er)
            }
        },
        getThreadsByUser: async (
            _: any,
            { id }: { id: string },
            { thread }: { thread: ThreadAPI }
        ) => {
            try {
                return await thread.getThreadsByUser(id)
            } catch (er) {
                console.log(er)
            }
        },
        getThreads: async (
            _: any,
            { popularity, time }: { popularity: ThreadPop; time: ThreadTime },
            { thread }: { thread: ThreadAPI }
        ) => {
            try {
                return await thread.getThreads(popularity, time)
            } catch (er) {
                console.log(er)
            }
        },
        getFollowingThreads: async (
            _: any,
            { following }: { following: string[] },
            { thread }: { thread: ThreadAPI }
        ) => {
            try {
                return await thread.getFollowingThreads(following)
            } catch (er) {
                console.log(er)
            }
        },
        discoverThreads: async (
            _: any,
            {}: {},
            { thread }: { thread: ThreadAPI }
        ) => {
            try {
                return await thread.discoverThreads()
            } catch (er) {
                console.log(er)
            }
        },
    },
    Mutation: {
        newThread: async (
            _: any,
            { newThread }: { newThread: NewThread },
            { thread }: { thread: ThreadAPI }
        ) => {
            try {
                return await thread.newThread(newThread)
            } catch (er) {
                console.log(er)
            }
        },
        editThread: async (
            _: any,
            { id, updatedThread }: { id: string; updatedThread: EditThread },
            { thread }: { thread: ThreadAPI }
        ) => {
            try {
                return await thread.editThread(id, updatedThread)
            } catch (er) {
                console.log(er)
            }
        },
        deleteThreadById: async (
            _: any,
            { id }: { id: string },
            { thread }: { thread: ThreadAPI }
        ) => {
            try {
                return await thread.deleteThreadById(id)
            } catch (er) {
                console.log(er)
            }
        },
        deleteThreadsByUser: async (
            _: any,
            { id }: { id: string },
            { thread }: { thread: ThreadAPI }
        ) => {
            try {
                return await thread.deleteThreadsByUser(id)
            } catch (er) {
                console.log(er)
            }
        },
    },
}
