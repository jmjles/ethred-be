export const schema = `#graphql
type Query {
    getUserById(id: String): User
}

type User {
    id: String
    displayName: String
    avatar: String
    border: String
    active: Boolean
    banned: Boolean
    joined: String
}
`
