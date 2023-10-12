export const schema = `#graphql
type Query {
    getUserById(id: String): User
    getAllUsers:[User]
    #getThreadsByUser(id: String):[Thread]
}

type Mutation {
    addUser(newUser:NewUser):User
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

input NewUser {
    cryptoAddress: String
    id: String
    displayName: String
    avatar: String
    border: String
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
