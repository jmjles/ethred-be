import { Query } from 'mongoose'
import { UserAPI } from './API/UserAPI'
import { ThreadAPI } from './API/ThreadAPI'

interface ServerContext {
    dataSources?: {
        user: UserAPI
        thread: ThreadAPI
    }
}

type NewUser = {
    cryptoAddress: string
    id: string
    displayName: string
    avatar?: string
    border?: string
}

interface NewThread {
    user: string
    content: string
    media?: string[]
    date: Date
}

interface Reply extends NewThread {
    replyTo: string
}

interface Thread extends Reply {
    edited: Boolean
    deleted: Boolean
    parent: Boolean
}
