import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  { path: '/', 
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      { 
        path: '/home',
        element: <Home />
      },
      { 
        path: '/about',
        element: <About />
      },
      { 
        path: '/explore',
        element: <Explore />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
