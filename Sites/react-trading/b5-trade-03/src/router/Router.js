import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

/** ROOT STYLE FILE */
import './Router.scss';

import Copyright from '../BootstrapFive/Copyright/Copyright';
import BusinessThree from '../BootstrapFive/Business03/BusinessThree';


const Router = () => {

  return (
    <BrowserRouter basename={`/react/b5business-three`}>
      <Switch>
        <BusinessThree />
      </Switch>
      <Copyright />
    </BrowserRouter>
  )

}

export default Router
