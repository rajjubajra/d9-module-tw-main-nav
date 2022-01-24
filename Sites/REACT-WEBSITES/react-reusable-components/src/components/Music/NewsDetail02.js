import {useState, useEffect} from 'react';
import ImageOnload from '../ImageOnload';
import {GrClose} from 'react-icons/gr';

function NewsDetail02({index}) {

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
    <div className="w-full max-w-screen-xl m-auto p-10">

      <div className="w-full flex justify-end p-5 cursor-pointer" 
        title="close"><GrClose />
        </div>
  
      <div className="my-8 flex justify-end">
        {fetched && newsdata[0].date}
      </div>

      <div>
        <h2 className="text-4xl my-5 tracking-wider">
          {fetched && newsdata[0].title}</h2>
      </div>

      <div>    
        {fetched &&  <ImageOnload 
            cssClass="md:w-1/2 object-cover pr-6 pb-5 pt-5 md:float-left md:border-r border-gray-300 mr-6"
            src={newsdata[0].image} 
            alt="news" />}
          
        {fetched &&  <div className="pl-10 ml-10 border-l-2 border-gray-300" dangerouslySetInnerHTML={{__html: newsdata[0].body }} />}
      </div>
      
    </div>
  )
}

export default NewsDetail02
