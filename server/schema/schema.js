const { GraphQLSchema} = require("graphql")
const mutation = require("../graphql/mutations/index.js");
const RootQuery = require("../graphql/queries/index.js");

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation : mutation
})