import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `http://harayia2.local/graphql`,
});
const client = new ApolloClient({
  cache,
  link,
});

export default client;