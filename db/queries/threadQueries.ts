import { NewThread } from '../../types'
import { threadModel as model } from '../models/ThreadModel'

export const newThread = async (thread: NewThread) => {
    try {
        return await model.create(thread)
    } catch (er: any) {
        console.log(er)
        return {}
    }
}

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
