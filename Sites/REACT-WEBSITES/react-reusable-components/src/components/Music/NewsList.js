import {useState, useEffect} from 'react';
import BtnReadMore from '../Buttons/BtnReadMore';

function NewsList() {

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
    <div>
      {
        fetched && newsdata.map( item => {
          return <div key={item.id} className="grid grid-rows-1 p-10 font-extralight">
            <div className="text-center my-4">{item.article_id}</div>
            <div className="text-center">{item.date}</div>
            <div className="text-center">
              <h2 className="text-2xl my-4">{item.title}</h2>
            </div>
            <div><div  className="text-center my-4" dangerouslySetInnerHTML={{__html: item.body.substring(0,300)}} /></div>
            <div className="text-center"><BtnReadMore link="#" /></div>
          </div>
        })
      }
      
    </div>
  )
}

export default NewsList
