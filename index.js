const express = require('express');

const { connection } = require("./src/configs/db");

const { ApolloServer } = require('apollo-server-express');


const { userType } = require('./src/GraphQL/user.type');


const { postType } = require('./src/GraphQL/posts.type');

const { userResolvers } = require('./src/GraphQL/user.resolvers');
const { postResolvers } = require('./src/GraphQL/posts.resolvers');
require('dotenv').config();



async function startServer() {
  const app = express();

  const server = new ApolloServer(
    {
      typeDefs: [userType, postType],
      resolvers: [userResolvers, postResolvers],
      context: ({ req }) => ({ req })
    }
  );
  await server.start();

  server.applyMiddleware({ app });

  app.get('/', (req, res) => {
    res.send('Welcome to Homepage');
  });

  app.listen(process.env.PORT || 5050, async () => {
    try {
      await connection;

      
      console.log('Connected to MongoDB');
      console.log(`Listening on port ${process.env.PORT || 5050}`);
    } catch (error) {
      console.error(error);
    }
  });
}

startServer();