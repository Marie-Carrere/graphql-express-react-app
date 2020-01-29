import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import BookList from './components/BookList';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>Reading List</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}


export default App;
