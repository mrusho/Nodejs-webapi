// import EnvironmentConfig from "./config/config";
import express from "express";
import graphqlHTTP from "express-graphql";
import {buildSchema} from "graphql";
import AppSchema from "./data/schema";
import db from "./models/index";
import {GetThreads, GetThread, GetPosts, GetPost} from "./data/query";

// Create an express server and a GraphQL endpoint
const app = express();
db.sequelize.authenticate().then(() => {
  console.log("Connection Successful");
  app.use('/api', graphqlHTTP({
    schema: buildSchema(AppSchema),  // Must be provided
    rootValue: {
      threads: GetThreads,
      thread: GetThread,
      posts: GetPosts,
      post: GetPost,
    },
    graphiql: true,  // Enable GraphiQL when server endpoint is accessed in browser
  }));
  
  app.listen(4000, async () => {
    console.log("Now browse to localhost:4000/api");
  })
}).catch((err: any) => {
  console.log("Unable to connect to the database:", err);
});