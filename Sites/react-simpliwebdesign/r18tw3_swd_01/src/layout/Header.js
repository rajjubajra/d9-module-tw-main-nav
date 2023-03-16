import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import {url} from '../redux/config'


function Header() {
  return (
    <div className="flex">
      <div className="fixed">
        <div className="-rotate-90 mt-10 -ml-1">
        <Nav />
        </div>
      </div>

      { url === 'dev/backend' &&
      <div className="-rotate-90 mt-96 -ml-6">
      {url}
      </div>
      }

      <div className="fixed bottom-0">
        <div className="-rotate-90 mb-40 -ml-14">
        <Footer />
        </div>
      </div>
    </div>
  )
}

export default Header
