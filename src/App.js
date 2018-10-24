import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
import './App.css';


const app = new Clarifai.App({
 apiKey: 'd0417d791dfa4452a2948c18ea73075d'
});


class App extends Component {
  constructor(){
    super();
        this.state = {
          input: '',
          imageUrl: ''
        }
    }

  onInputChange = (e) => {
      console.log(e.target.value);
      this.setState({input: e.target.value })
  }

  onButtonSubmit = () => {
    console.log('Click');
          this.setState({imageUrl: this.state.input })
          //app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg")
          app.models.predict(Clarifai.COLOR_MODEL, "https://samples.clarifai.com/face-det.jpg")
          .then(
          function(response) {
            // do something with response
            console.log(response);
          },
          function(err) {
            // there was an error
          }
        );
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Signin />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
