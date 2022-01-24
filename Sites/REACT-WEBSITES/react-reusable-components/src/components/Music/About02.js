import React, {useEffect, useState} from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FiPhoneCall} from 'react-icons/fi';

function About02() {

  const [aboutdata, setAboutdata] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(()=>{
    fetch('http://localhost:3000/data/about.json')
    .then(res => res.json())
    .then( data => setAboutdata(data))
    .catch(err => console.log(err));
  },[]);


  useEffect(() => {
    aboutdata.length > 0 && setFetched(true);
  },[aboutdata.length]);


  return (
    <div className="relative w-full max-w-screen-xl m-auto p-10">

      <div className="grid grid-flow-row gap-10 relative z-10">
        <div className="text-6xl">About</div>
        <div className="text-2xl tracking-wider">
        <div dangerouslySetInnerHTML={{__html: fetched && aboutdata[0].body.substring(0,250)}} />
        </div>
        <div className="tracking-wider">
          <div dangerouslySetInnerHTML={{__html: fetched && aboutdata[0].body}} />
        </div>
      
      <div className="text-6xl">

           {/** ROW THREE */}
      <div>
        <div className="grid
        grid-flow-row gap-10
        md:grid-cols-2 md:grid-row-1 font-extralight border-t border-gray-300 pt-10">
          <div>
            <h1 className="text-3xl tracking-wider ">YW MUSIC TWO</h1>
          </div>
          <div>
            <div className="w-full tracking-wider md:flex md:flex-col  text-base md:items-end">
              
                <div className="flex w-full">
                  <div className="mt-1 px-2"><AiOutlineMail /></div>
                  <div>email@example.com</div> 
                </div>   
                <div className="flex w-full">
                  <div className="mt-1 px-2"><FiPhoneCall /></div>
                  <div>(UUU) 5555-5555</div>
                </div>   
            </div>
          </div>
          
        </div>
      </div>

      
      </div>
    </div>

    <div className="w-full h-screen absolute top-0 
    origin-center transform rotate-90 md:rotate-0 
    text-9xl md:text-9xl md:text-16xl text-gray-100 z-0
    flex justify-center items-center font-semibold">About</div>
    
    </div>
  )
}

export default About02
