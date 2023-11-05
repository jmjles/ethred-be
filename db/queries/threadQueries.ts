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

export const getThreadsByUser = async (id: string) => {
    try {
        return await model.where({ id })
    } catch (er) {
        console.log(er)
        return []
    }
}

export const getThreads = async (
    popularity: 'all' | 'upVotes' | 'downVotes' | 'views',
    time: 'allTime' | 'last24' | 'week' | 'month'
) => {
    try {
        const t =
            time === 'last24'
                ? ''
                : time === 'week'
                ? ''
                : time === 'month'
                ? ''
                : time === 'allTime'
                ? ''
                : null
        if (t === null) throw Error('bad time input')
        if (!['all', 'upVotes', 'downVotes', 'views'].includes(popularity))
            throw Error('bad popularity input')
        return await model.where().gte('date', t).sort(popularity)
    } catch (er) {
        console.log(er)
        return []
    }
}

export const getFollowingThreads = async (following: string[]) => {
    try {
        if (!following.length) return []
        return await model.find().all('id', following)
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
