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
                return await user.getUserById(id)
            } catch (er) {
                console.log(er)
            }
        },
        getAllUsers: async (_: any, args: any, { user }: { user: UserAPI }) => {
            try {
                return await user.getAllUsers()
            } catch (er) {
                console.log(er)
            }
        },
    },
    Mutation: {
        addUser: async (
            _: any,
            { newUser }: { newUser: NewUser },
            { user }: { user: UserAPI }
        ) => {
            try {
                return await user.addUser(newUser)
            } catch (er) {
                console.log(er)
            }
        },
    },
}
