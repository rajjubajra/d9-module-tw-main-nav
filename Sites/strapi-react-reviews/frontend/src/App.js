import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


//redux
import store from './redux/store';
import {Provider} from 'react-redux';


//page and layout import
import Homepage from './pages/Homepage';
import ReviewDetails from './pages/ReviewDetails';
import Category from './pages/Category';
import PostReview from './pages/PostReview';
import ReviewEdit from './pages/ReviewEdit';
import Login from './pages/Login';


//ApolloClient
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql', 
  cache: new InMemoryCache()
});

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <ApolloProvider client={client}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<ReviewDetails />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/post-review" element={<PostReview />} />
        <Route path="/edit-review/:id" element={<ReviewEdit />} />
      </Routes>
    </div>
    </ApolloProvider>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
