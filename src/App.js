import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

class App extends Component {
  constructor(){
    super();
        this.state = {
          input: '',
        }
    }

  onInputChange = (e) => {
      console.log(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} />
      { /*   <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
