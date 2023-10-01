import { UserAPI } from '../API/UserAPI'
export const resolvers = {
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
            // getLogs: async (_, { username }, { dataSources }) => {
            //     try {
            //         return dataSources.user.getUserLogs(username)
            //     } catch (er) {
            //         console.log(er)
            //     }
            // },
        },
        // Mutation: {
        //     // addLog: async (_, { username, log }, { dataSources }) => {
        //     //     try {
        //     //         return dataSources.user.addUserLog(username, log)
        //     //     } catch (er) {
        //     //         console.log(er)
        //     //     }
        //     // },
        //     // addUser: async (_, { username }, { dataSources }) => {
        //     //     try {
        //     //         return dataSources.user.addUSER(username)
        //     //     } catch (er) {
        //     //         console.log(er)
        //     //     }
        //     // },
        // },
    },
}
