import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import List from './List'; 

const client = new ApolloClient({
  uri: 'https://fakeql.com/graphql/7831dbecc6baf47295231ee7b465befa'
});

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <List />
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
