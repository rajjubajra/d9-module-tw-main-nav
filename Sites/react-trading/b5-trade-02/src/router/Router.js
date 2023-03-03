import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

/** ROOT STYLE FILE */
import './Router.scss';

import Copyright from '../BootstrapFive/Copyright/Copyright';
import BusinessTwo from '../BootstrapFive/Business02/BusinessTwo';


const Router = () => {

  return (
    <BrowserRouter basename={`/react/b5business-two`}>
      <Switch>
        <BusinessTwo />
      </Switch>
      <Copyright />
    </BrowserRouter>
  )
}

export default Router
