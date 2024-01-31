import { threadResolvers } from './threadResolver'
import { userResolvers } from './userResolver'
import { mergeObj } from '../../utils/index'

const resolverList = [threadResolvers, userResolvers]
const queriesList = resolverList.map((r) => r.Query)
const mutationsList = resolverList.map((r) => r.Mutation)

let queries = mergeObj(queriesList)
let mutations = mergeObj(mutationsList)

export const resolvers = {
    Query: queries,
    Mutation: mutations,
}
