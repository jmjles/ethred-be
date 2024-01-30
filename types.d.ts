import { Query } from 'mongoose'
import { UserAPI } from './API/UserAPI'
import { ThreadAPI } from './API/ThreadAPI'

type NewUser = {
    cryptoAddress: string
    id: string
    displayName: string
    avatar?: string
    border?: string
}

type EditUser = {
    displayName?: string
    avatar?: string
    border?: string
    followers?: [string]
    following?: [user]
    blocked?: [user]
}

interface NewThread {
    user: string
    avatar?: string
    content: string
    title?: string
    community?: string
    categories?: string[]
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
interface EditThread {
    content: string
    avatar?: string
    title: string
    community: string
    media?: string[]
    deleted?: Boolean
}

type ThreadPop = 'all' | 'upVotes' | 'downVotes' | 'views'
type ThreadTime = 'allTime' | 'last24' | 'week' | 'month'
