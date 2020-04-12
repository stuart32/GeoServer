import { ApolloServer, gql } from "apollo-server-express";
import express from 'express';

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers"
//import { Property } from "./models/property"

import {assertWrappingType} from 'graphql'
import mongoose, { mongo } from 'mongoose';
import { start } from "repl";


const startServer = async () => {
      const app = express();

      const server = new ApolloServer({
            typeDefs,
            resolvers
      });

      server.applyMiddleware({ app });

      //Wait for mongoDB to connect before starting the server.
      await mongoose.connect('mongodb://localhost:27017/test', {
            useNewUrlParser: true
      });

      app.listen({ port: 4000 }, () => 
            console.log('Server ready at http://localhost:4000${server.graphqlPath}')
      );
}

startServer();