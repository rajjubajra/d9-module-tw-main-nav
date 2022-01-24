const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());

const userData = require("./MOCK_DATA.json");
const graphql = require("graphql");
const {
  GraphQLObjectType, 
  GraphQLSchema, 
  GraphQLInt, 
  GraphQLString, 
  GraphQLList
} = graphql;



const {graphqlHTTP} = require("express-graphql");


/** USER-TYPE */
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {type: GraphQLInt},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    email: {type: GraphQLString}
  })
})


/** Schemas  ***************************/
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: { 
      type: new GraphQLList(UserType),
      args: {id: {type: GraphQLInt}},
      resolve(parent, args){
        return  userData
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        email: {type: GraphQLString}
      },
      resolve(parent, args){
      userData.push({
        id: userData.length + 1, 
        firstName:args.firstName, 
        lastName: args.lastName, 
        email: args.email });
      return args
      }
    }
    
  }
})

const schema = new GraphQLSchema({query: RootQuery, mutation: Mutation});






app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))


app.listen(PORT, ()=>{
  console.log(`Example app listening at http://localhost:${PORT}`)
})