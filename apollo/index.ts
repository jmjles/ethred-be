import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import express from 'express'
import http from 'http'
import pkg from 'body-parser'
import { resolvers } from './resolvers'
import { UserAPI } from '../API/UserAPI'
import { ThreadAPI } from '../API/ThreadAPI'
import { schema } from './schema'
const { json } = pkg

export default async () => {
    const app = express()
    const httpServer = http.createServer(app)
    //* Create Apollo Server
    try {
        const server = new ApolloServer({
            typeDefs: schema,
            resolvers,
            plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
            dataSources: () => {
                return {
                    user: new UserAPI(),
                    thread: new ThreadAPI(),
                }
            },
        })
        //* Launch Server
        await server.start()

        server.applyMiddleware({ app })
        //* Start on port 4000
        await new Promise<void>((resolve) =>
            httpServer.listen({ port: 4000 }, resolve)
        )

        console.log(`🚀 Server ready at http://localhost:4000/`)
    } catch (er) {
        console.log('An Error has occurred')
        console.log(er)
    }
}
