import { UserAPI } from '../../API/UserAPI'
import { EditUser, NewUser } from '../../types'

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
        getUsers: async (
            _: any,
            { users }: { users: string[] },
            { user }: { user: UserAPI }
        ) => {
            try {
                return await user.getUsers(users)
            } catch (er) {
                console.log(er)
            }
        },
        getSuggestedUsers: async (
            _: any,
            { friends, blocked }: { friends: string[]; blocked: string[] },
            { user }: { user: UserAPI }
        ) => {
            try {
                return await user.getSuggestedUsers(friends, blocked)
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
        editUser: async (
            _: any,
            { id, fields }: { id: string; fields: EditUser },
            { user }: { user: UserAPI }
        ) => {
            try {
                return await user.editUser(id, fields)
            } catch (er) {
                console.log(er)
            }
        },
        banUser: async (
            _: any,
            { id }: { id: string },
            { user }: { user: UserAPI }
        ) => {
            try {
                return await user.banUser(id)
            } catch (er) {
                console.log(er)
            }
        },
        unBanUser: async (
            _: any,
            { id }: { id: string },
            { user }: { user: UserAPI }
        ) => {
            try {
                return await user.unBanUser(id)
            } catch (er) {
                console.log(er)
            }
        },
        deleteUser: async (
            _: any,
            { id }: { id: string },
            { user }: { user: UserAPI }
        ) => {
            try {
                return await user.deleteUser(id)
            } catch (er) {
                console.log(er)
            }
        },
        permaDeleteUser: async (
            _: any,
            { id }: { id: string },
            { user }: { user: UserAPI }
        ) => {
            try {
                return await user.permaDeleteUser(id)
            } catch (er) {
                console.log(er)
            }
        },
    },
}
