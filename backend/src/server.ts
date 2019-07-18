import 'reflect-metadata';
import * as TypeGraphQL from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { Container } from 'typedi';
import { config } from './config';
import { createDBConnection } from './db';
import {resolvers} from './modules'

const bootstrap = async () => {
  try {
    await createDBConnection();

    const schema = await TypeGraphQL.buildSchema({
      resolvers: resolvers,
      container: Container,
    });

    const server = new ApolloServer({
      schema
    });

    const { url } = await server.listen(config.server.port);

    console.log(`🚀 Server is running, GraphQL Playground available at ${url}`);
  } catch (err) {
    console.error(err);
  }
};

bootstrap();
