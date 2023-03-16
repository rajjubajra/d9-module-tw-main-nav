import CardTheme from './CardTheme';
import React, {useEffect} from 'react';
import {gsap} from 'gsap';
import TitleOnTop from '../../components/TitleOnTop';
import ThemeMenu from './ThemeMenu';
import ThemeNotFound from './ThemeNotFound';


function ThemeContainer({themelist, menu}) {

  /** GSAP Animation */
  useEffect(()=>{
    gsap.from('.card', {duration:1, opacity:0, stagger:0.5});
  },[])
  
  return (
    <div className="px-4 w-full">

        <TitleOnTop title="Theme Gallery" />
        <ThemeMenu menu={menu} />
        <div className="text-xs grid md:grid-cols-2 w-full gap-2 font-light">
          {
            themelist.length > 0 
            ? themelist.map((item,index)=>{
              return <div key={index} className="card">
                <CardTheme 
                    image={item.field_theme_gallery_theme_image}
                    title={item.title}
                    link={item.field_theme_gallery_theme_link}
                />
              </div>
            })
            : <ThemeNotFound />
          }
        </div>
    </div>
  )
}

export default ThemeContainer