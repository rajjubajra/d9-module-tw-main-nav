import React,{useState, useEffect} from 'react';
import ImageOnload from '../ImageOnload';
import BtnReadMore from '../../components/Buttons/BtnReadMore';

function Home03() {

  const [state, setState] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(()=>{
    fetch('http://localhost:3000/data/feature.json')
    .then( res => res.json())
    .then( data => setState(data))
    .catch(err => console.log(err))
  },[])

  useEffect(() => {
    state.length > 0 && setFetched(true);
  },[state.length])


  return (
    <div className="w-full max-w-screen-xl m-auto p-10">      
        { fetched &&
          state.map(item => {
            return <div key={item.id} className="grid md:grid-cols-12 w-full md:h-screen">

                  <div className="md:col-span-2 relative md:order-1 order-2">
                    <div className="md:absolute md:bottom-52">
                      <h2 className="text-6xl md:transform md:-rotate-90 mt-5">
                        {item.title}</h2>
                    </div>
                  </div>

                  <div className="md:col-span-4 p-10 md:order-2 order-3">
                    <div dangerouslySetInnerHTML={{__html: item.body }} />
                    <div className="mt-5"><BtnReadMore link="#" /></div>
                  </div>
                  <div className="md:col-span-6 relative md:order-3 order-1">
                    <div>
                      <ImageOnload 
                        cssClass="h-40 md:h-screen md:py-40 w-full object-cover"
                        src={item.image} 
                        alt={item.alt} />
                    </div>
                  </div>
              </div>
          })
        } 
      </div>
  )
}

export default Home03
