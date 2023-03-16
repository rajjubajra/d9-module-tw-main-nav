import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {
      createBrowserRouter,
      RouterProvider,
      } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Themes from './pages/Themes';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Blogposts from './pages/Blogposts';
import WebResources from './pages/WebResources';
import Clients from './pages/Clients';
//import Pagenotfound from './components/Pagenotfound';
import UnderConstruction from './components/UnderConstruction';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <UnderConstruction />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/theme-gallery/:id",
          element: <Themes />
        },
        {
          path: "/contact-me",
          element: <Contact />
        },
        {
          path: "/clients",
          element: <Clients />,
        },
        {
          path: "/blog",
          element: <Blogposts />,
        },
        {
          path: "/web-resources",
          element: <WebResources />,
        }
      ]
    },
  
  ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <RouterProvider router={router} />
</Provider>
);

