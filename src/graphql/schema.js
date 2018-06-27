const { makeExecutableSchema } = require('graphql-tools');
const { find, filter } = require('lodash');
const GraphQL = require('graphql');
const {
  GraphQLList,
	GraphQLString,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLSchema,
} = GraphQL;

//Describe the graphql data scheme
const typeDefs = `
type Query {
  application(id: ID!): Application
}
type Application {
  id: ID
  name: String
}`

//Mocked data, in real DB application it should be deleted
const applications = [
  {id: 1,
    name: "Google"
  },
  {id: 2,
    name: "Netflix"
  },
  {id: 3,
    name: "Facebook"
  },
];

//Resolvers part
const resolvers = {
  Query: {
    application: (parent,args) => {
        const appid = parseInt(args.id);
        return find(applications, {id: appid});
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = schema;
