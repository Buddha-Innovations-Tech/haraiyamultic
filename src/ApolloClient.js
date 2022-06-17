import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `https://admin.hmc.edu.np/admin-har/graphql`,
});
const client = new ApolloClient({
  cache,
  link,
});

export default client;
