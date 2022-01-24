import {useState, useEffect} from 'react';
import ImageOnload from '../ImageOnload';



function About() {
  
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
    <div className="grid grid-cols-12 max-w-screen-xl m-auto p-10 font-extralight tracking-wide">
      <div className="p-10 col-span-12">
        <h1 className="text-4xl">About</h1>
      </div>
      
      <div className="col-span-2 mt-12">
      { fetched && <ImageOnload 
        cssClass="w-full h-96 object-cover"
        src={aboutdata[0].image}  
        alt="about" />}
      </div>
      <div className="col-span-10 p-10">
        <div 
        className="tracking-wider" 
        dangerouslySetInnerHTML={{__html:  fetched && aboutdata[0].body}} />
      </div>

    </div>
  )
}

export default About
