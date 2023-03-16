import React from 'react';
import GalleryRemote from './GalleryRemote';
import GalleryLocal from './GalleryLocal';



function Gallery() {
  
  console.log(window.location.origin);
  return (
    window.location.origin === 'http://localhost:3000'
    ? <GalleryLocal />
    : <GalleryRemote />
  )
}

export default Gallery