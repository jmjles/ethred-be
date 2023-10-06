export const schema = `#graphql
type Query {
    getUserById(id: String): User
    getAllUsers:[User]
    getThreadsByUser(id: String):[Thread]
}

type UserSince {
    id: String,
    displayName: String,
    since: String,
}

type User {
    id: String
    displayName: String
    avatar: String
    border: String
    active: Boolean
    banned: Boolean
    joined: String
    lastOnline: String,
    ipAddresses: [String],
    followers: [UserSince],
    following: [UserSince],
    blocked: [UserSince],
}

type Thread {
    user:String,
    content:String,
    replyTo: String,
    media: [String],
    deleted: Boolean,
    parent: Boolean,
    date: String,
    edited:Boolean,
}
`
