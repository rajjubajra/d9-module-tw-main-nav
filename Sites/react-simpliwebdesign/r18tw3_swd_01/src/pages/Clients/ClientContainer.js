import CardClient from './CardClient';
import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import TitleOnTop from '../../components/TitleOnTop';


function ClientContainer({clientlist}) {

  /** GSAP Animation */
  useEffect(()=>{
    gsap.from('.card', {duration:1, opacity:0, stagger:0.5});
  },[])
  
  return (
    <div className="px-4 w-full">
        <TitleOnTop title="Clients" />
        <div className="text-xs grid md:grid-cols-2 w-full gap-2 font-light">
          {
            clientlist.length > 0 &&
            clientlist.map((item,index)=>{
              return <div key={index} className="card">
                <CardClient 
                    image={item.field_theme_gallery_theme_image}
                    title={item.title}
                    link={item.field_theme_gallery_theme_link}
                />
              </div>
            })
          }
        </div>
    </div>
  )
}

export default ClientContainer