import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Footer from './components/Footer';


class App extends Component {
      render(){
        return(
          <div>
            <Search />
            <Footer />
          </div>
        )
      }
}
export default App;
