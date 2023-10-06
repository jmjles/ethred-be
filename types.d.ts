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
