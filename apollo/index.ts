import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express'
import http from 'http'
import cors from 'cors'
import pkg from 'body-parser'
import { resolvers } from './resolvers'
import { ServerContext } from '../types'
import { UserAPI } from '../API/UserAPI'
import { ThreadAPI } from '../API/ThreadAPI'
import { schema } from './schema'
const { json } = pkg

export default async () => {
    const app = express()
    const httpServer = http.createServer(app)
    //* Create Apollo Server
    const server = new ApolloServer<ServerContext>({
        typeDefs: schema,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    })
    //* Launch Server
    await server.start()

    app.use(
        '/graphql',
        cors<cors.CorsRequest>(),
        json(),
        expressMiddleware(server, {
            context: async () => ({
                user: new UserAPI(),
                thread: new ThreadAPI(),
            }),
        })
    )

    //* Start on port 4000
    await new Promise<void>((resolve) =>
        httpServer.listen({ port: 4000 }, resolve)
    )

    console.log(`🚀 Server ready at http://localhost:4000/`)
}
