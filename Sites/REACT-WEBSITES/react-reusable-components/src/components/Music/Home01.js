import {useEffect, useState} from 'react';
import ImageOnload from '../ImageOnload';
import BtnReadMore from '../Buttons/BtnReadMore';




function Home01() {

  const [state, setState] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/data/feature.json')
    .then( res => res.json())
    .then( data => setState(data))
    .catch(err => console.log(err))
  },[])

  return (
    <div>
      {
        state.length > 0 &&
        state.map((item)=>{
        return <div key={item.id} className="w-full p-5 max-w-screen-xl m-auto">

          <div className="grid gap-3 
          md:grid-cols-2 md:grid-rows-2 
          lg:grid-cols-3 lg:grid-rows-1">
            <div className="px-10">
              <h1 className="text-5xl font-thin text-right py-5 tracking-widest
              md:w-1/2 md:transform md:-rotate-90 md:relative md:top-24 md:left-1/4
              ">
                {item.title}
              </h1>
              </div>
            <div className="px-10">
              <div className="py-5 md:flex md:justify-end lg:w-2/3">
                <ImageOnload 
                src={item.image} 
                alt={item.alt} 
                cssClass="h-64 w-full md:h-96 md:w-64 object-cover" />
              </div>
            </div>
            <div className="px-10 
            md:col-span-2 md:flex md:justify-end 
            lg:col-auto">
              <div className="md:w-1/2 lg:w-full pb-8 text-right">
                <div  className="font-extralight my-5 text-right" 
                  dangerouslySetInnerHTML={{__html: item.body}} />
                <div className="md:text-right md:mt-10">
                  <BtnReadMore link={item.link} />
                </div>
            </div>
            </div>
          </div>

        </div>
        })
      }
    
      
    </div>
  )
}

export default Home01
