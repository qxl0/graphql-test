import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import BookList from './BookList'

const client=new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Ninja's Reading List</h1> 
      <BookList/>
    </ApolloProvider>
  )
}

export default App
