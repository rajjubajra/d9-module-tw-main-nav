import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Music from './components/Music/Music';



function App() {
  return (
    <div className="App">

      <h1 className="text-3xl text-center">React re-usable Components</h1>

      <BrowserRouter>
        <Switch>
          <Route exact path="/">

            <div className="grid gap-4">
              <Link to="/music">Music</Link>
              <Link to="/blog">Blog Post</Link>
              <Link to="/">Restaurant</Link>
            </div>
          </Route>
          <Route exact path="/music">
            <Link to="/music-1">Music - 1</Link>
          </Route>
          <Route path="/music-1" >
            <Music />
          </Route>

          <Route path="/blog-post">
            Blog Post
          </Route>
          <Route path="/Blog-1">
            Blog post - 1
          </Route>


        </Switch>
        
        
      
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;