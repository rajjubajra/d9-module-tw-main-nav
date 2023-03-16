import React from 'react';
import ImageSlider from './Home/ImageSlider';
import {images} from './data.js'; 
import { useLoaderData } from 'react-router-dom';

export async function loader(){
  console.log(images);
return images;
}

function Home() {

  

  return (
    <div className="relative w-full z-10 flex-grow">
    <ImageSlider />
    </div>
  )
}

export default Home