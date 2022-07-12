import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4y8tgim15jt01ta4uj80t60/master',
  cache: new InMemoryCache(),
});
