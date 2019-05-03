import fs from "fs";
import path from "path";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const expressPlayground = require("graphql-playground-middleware-express")
    .default;

import resolvers from "./resolvers/";

const schema = fs
    .readFileSync(path.resolve(__dirname, "./schema/schema.graphql"), "utf8")
    .toString();

const typeDefs = gql(schema);

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({ app });

app.use("/playground", expressPlayground({ endpoint: "/graphql" }));

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
