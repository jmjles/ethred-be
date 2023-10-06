import { UserAPI } from '../../API/UserAPI'
import { NewUser } from '../../types'
export const userResolvers = {
    Query: {
        getUserById: async (
            _: any,
            { id }: { id: string },
            { user }: { user: UserAPI }
        ) => {
            try {
                return user.getUserById(id)
            } catch (er) {
                console.log(er)
            }
        },
    },
    Mutation: {
        addUser: async (_: any, args: any, { user }: { user: UserAPI }) => {
            try {
                const { id, cryptoAddress, displayName } = args
                const newUser: NewUser = { id, cryptoAddress, displayName }
                return user.addUser(newUser)
            } catch (er) {
                console.log(er)
            }
        },
    },
}
