import { Query } from 'mongoose'
import { UserAPI } from './API/UserAPI'
import { ThreadAPI } from './API/ThreadAPI'

interface ServerContext {
    dataSources?: {
        user: UserAPI
        thread: ThreadAPI
    }
}

interface User {
    cryptoAddress: string
    id: string
    displayName: string
    avatar?: string
    border?: string
    active: Boolean
    banned: Boolean
    joined: Date
}
