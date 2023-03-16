import React from 'react';
import ThemeRemote from './ThemeRemote';
import ThemeLocal from './ThemeLocal';
import {useParams} from 'react-router-dom';



function Themes() {
  
  const categoryId = useParams();
  console.log(categoryId.id);

  return (
    window.location.origin === 'http://localhost:3000' 
    ? <ThemeLocal categoryId={categoryId.id} />
    : <ThemeRemote categoryId={categoryId.id} />
  )
}

export default Themes