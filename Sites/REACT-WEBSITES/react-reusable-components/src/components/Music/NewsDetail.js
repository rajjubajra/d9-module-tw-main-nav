import {useState, useEffect} from 'react';
import BtnBack from '../Buttons/BtnBack';


function NewsDetail() {
  
  const [newsdata, setNewsdata] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(()=>{
    fetch('http://localhost:3000/data/news.json')
    .then(res => res.json())
    .then( data => setNewsdata(data))
    .catch(err => console.log(err));
  },[]);

  useEffect(() => {
    newsdata.length > 0 && setFetched(true);
  },[newsdata.length]);


  return (
    <div className="grid grid-cols-12 max-w-screen-xl m-auto p-10 font-extralight tracking-wide">

      <div className="col-span-11 text-right pr-3">Share</div>
      <div className="text-center">
        <BtnBack />
      </div>

      <div className="col-span-12 pl-10 py-3">
        <div>{ fetched && newsdata[0].date}</div>
      </div>

      <div className="col-span-12 pl-10 py-3">
        <h1 className="text-2xl">{ fetched && newsdata[0].title}</h1>
      </div>
      
      <div className="col-span-12 p-10">
        <div className="tracking-wider" dangerouslySetInnerHTML={{__html:  fetched && newsdata[0].body}} />
      </div>

    </div>
  )
}

export default NewsDetail
