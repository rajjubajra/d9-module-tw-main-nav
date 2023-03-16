import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import PageNotFound from './components/PageNotFound';
import Preview from './components/Preview';

/** Navigation Menu */
import NavigationMenu from './ui/navigationmenu';

/** Hero section */
import HeroSection from './ui/herosection';

/** Form */
import Form from './ui/form';

/** Feature Section */
import FeatureSection from './ui/featuresection';

/** Landing Page section */
import Landing, { loader as loaderArrImg } from './ui/landing';


/** Introducton Page section */
import  Aboutus from './ui/aboutus';


/** News Page */
import News from './ui/news';
import NewsInDetail from './ui/news/news001/NewsInDetail';

/** Gallery Page */
import Galleries from './ui/galleries'

/** Call to Action */
import Calltoaction from './ui/calltoaction';

/** Testimonials[Review or feedback] */
import Testimonials from './ui/testimonials';

/** Testimonials[Review or feedback] */
import Blogs from './ui/blogs';



import Page from './ui';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Lumbini,{loader as quoteLoader} from './ui/lumbini';



const router = createBrowserRouter([
  { path: '/', 
    element: <App />,
    errorElement: <Preview />,
    children: [
      {  
        index: true,
        element: <Page />
      },
      {
        path: '/navigation-menu',
        element: <NavigationMenu />
      },
      {
        path: '/hero-section',
        element: <HeroSection />
      },
      {
        path: '/forms',
        element: <Form />
      },
      {
        path: '/feature-section',
        element: <FeatureSection />
      },
      {
        path: '/landing-page',
        element: <Landing />,
        loader: loaderArrImg
      },
      {
        path: '/aboutus',
        element: <Aboutus />,
      },
      {
        path: '/news',
        element: <News />,
        children:[
          {
            path: '/news/details',
            element: <NewsInDetail />
          }
        ]
      },
      {
        path: '/galleries',
        element: <Galleries />,
      },
      {
        path: '/calltoaction',
        element: <Calltoaction />,
      },
      {
        path: '/testimonials',
        element: <Testimonials />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/lumbini',
        element: <Lumbini />,
        loader: quoteLoader
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

