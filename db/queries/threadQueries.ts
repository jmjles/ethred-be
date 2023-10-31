import { NewThread } from '../../types'
import { threadModel as model } from '../models/ThreadModel'

//* Create
export const newThread = async (thread: NewThread) => {
    try {
        return await model.create(thread)
    } catch (er: any) {
        console.log(er)
        return {}
    }
}

//* Read
export const getThreadById = async (id: string) => {
    try {
        return await model.findById(id)
    } catch (er) {
        console.log(er)
        return {}
    }
}

export const getThreadsByUser = async (user: string) => {
    try {
        return await model.where({ id: user })
    } catch (er) {
        console.log(er)
        return []
    }
}

interface ThreadParams {
    popularity: 'all' | 'upVotes' | 'downVotes' | 'views'
    time: 'allTime' | 'last24' | 'week' | 'month'
}

export const getThreads = async (args: ThreadParams) => {
    try {
        const time = ''
        return await model.where().gte('date', time).sort(args.popularity)
    } catch (er) {
        console.log(er)
        return []
    }
}

export const getFollowingThreads = async () => {
    try {
    } catch (er) {
        console.log(er)
        return []
    }
}

export const discoverThreads = async () => {
    try {
    } catch (er) {
        console.log(er)
        return []
    }
}

//* Update
export const editThread = async () => {
    try {
    } catch (er) {
        console.log(er)
        return []
    }
}

//* Delete

export const deleteThreadById = async (id: string) => {
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

export const deleteThreadsByUser = async (id: string) => {
    try {
        return await model.updateMany(
            { user: id },
            { deleted: true },
            { new: true }
        )
    } catch (er) {
        console.log(er)
        return {}
    }
}
