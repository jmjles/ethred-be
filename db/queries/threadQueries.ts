import { EditThread, NewThread, ThreadPop, ThreadTime } from '../../types'
import { threadModel as model } from '../models/ThreadModel'
import { DateTime } from 'luxon'
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

export const getThreads = async (popularity: ThreadPop, time: ThreadTime) => {
    try {
        const d = DateTime.local()
        const t =
            time === 'last24'
                ? d.minus({ hours: 24 })
                : time === 'week'
                ? d.minus({ days: 7 })
                : time === 'month'
                ? d.minus({ months: 1 })
                : time === 'allTime'
                ? d.minus({ years: 1000 })
                : null
        return await model.where().gte('date', t?.toJSDate()).sort(popularity)
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
export const editThread = async (id: string, thread: EditThread) => {
    try {
        return await model.findByIdAndUpdate(
            id,
            { ...thread, edited: true },
            { new: true }
        )
    } catch (er) {
        console.log(er)
        return {}
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
