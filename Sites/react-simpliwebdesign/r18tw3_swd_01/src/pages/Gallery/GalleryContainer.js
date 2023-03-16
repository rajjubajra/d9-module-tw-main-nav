import React from 'react';
import Card from './Card';
import TitleOnTop from '../../components/TitleOnTop';


function GalleryContainer({data}) {

  console.log(data);

  return (
    <div className="w-full min-h-screen">
      <TitleOnTop title="Gallery" />
      <div className="grid md:grid-cols-3 md:gap-10 gap-2 px-4">
        {
          data?.map((item,i) => {
            return <Card key={i} item={item} />
          })
        }
      </div>
    </div>
  )
}

export default GalleryContainer
