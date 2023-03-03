import React from 'react';
import './App.scss';
import './BlogTwo.scss';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import RoutePages from './pages/RoutePages';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RoutePages />
      </Provider>
    </BrowserRouter>
  )
}

export default App