import { 
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache, 
  HttpLink,
  from
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import Users from "./Users";

const errorLink  = onError(({graphqlErrors, newtoworkError})=>{
  if(graphqlErrors){
    graphqlErrors.map(({message, location, path}) => {
      return console.log(`Graphql error ${message}`);
    });
  }
})

// const link = from ([
//   errorLink,
//   new HttpLink({uri: "http://localhost:4000/graphql"}),
// ])


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql"
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
      <h1>REACT APOLLO GRAPHQL</h1>
      <Users />
    </div>
    </ApolloProvider>    
  );
}

export default App;