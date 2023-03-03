import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

/** ROOT STYLE FILE */
import './Router.scss';

import Copyright from '../BootstrapFive/Copyright/Copyright';
import BusinessOne from '../BootstrapFive/Business01/BusinessOne';


const Router = () => {

  return (
    <BrowserRouter basename={`/react/b5business-one`}>
      <Switch>
        <BusinessOne />
      </Switch>
      <Copyright />
    </BrowserRouter>
  )
}

export default Router
