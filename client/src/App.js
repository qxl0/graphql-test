import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import BookList from './BookList'
import AddBook from './AddBook';

const client=new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Ninja's Reading List</h1> 
      <AddBook />
      <BookList/>
    </ApolloProvider>
  )
}

export default App
