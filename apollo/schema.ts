export const schema = `#graphql
type Query {
    getUserById(id: String): User
    getAllUsers:[User]
    getUsers:[User]
    getSuggestedUsers(friends:[String],blocked:[String]):[User]

    getThreadById(id:String):Thread
    getThreadsByUser(id:String):[Thread]
    getThreads(popularity:String,time:String):[Thread]
    getFollowingThreads(followers:[String]):[Thread]
    discoverThreads():[Thread]
}

type Mutation {
    addUser(newUser:NewUser):User
    editUser(id:String,user:Any):User
    banUser(id:String):User
    unBanUser(id:String):User
    deleteUser(id:String):User
    permaDeleteUser(id:String):User 

    newThread():Thread
    editThread():Thread
    deleteThreadById(id:String):Thread
    deleteThreadsByUser(id:String):Boolean
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
