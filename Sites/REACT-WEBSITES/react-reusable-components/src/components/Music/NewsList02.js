import {useState, useEffect} from 'react';
import BtnReadMore from '../Buttons/BtnReadMore';
import ImageOnload from '../ImageOnload';
//import NewsDetails02 from './NewsDetail02';
//import {GrClose} from 'react-icons/gr';



function NewsList02() {


  const [newsdata, setNewsdata] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [detail, setDetail] = useState('');

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
      <h2 className="text-3xl">News</h2>

      {/** NEWS LIST */}
      <div className={`${detail === '' ? 'block' : 'block'}`}>
      {
        fetched &&
        newsdata.map((item, index)=>{
          return <div key={index} className="grid md:grid-cols-12 my-10">
                    <div className="col-span-3">
                      <div className="py-5 md:pr-5 m-5 md:border-r border-gray-400">
                        <ImageOnload src={item.image} alt="news" />
                      </div>
                    </div>
                    <div className="col-span-9">
                      <div>
                        <p>{item.article_id}</p>
                      </div>
                      <div>{item.date}</div>
                      <div><h3 className="text-2xl my-2">{item.title}</h3></div>
                      <div>
                        <div dangerouslySetInnerHTML={{__html: item.body.substring(0, 200)}} />
                      </div>
                      <div className="my-5">
                        <div onClick={()=>setDetail(index)}><BtnReadMore link="#" /></div>
                      </div>
                    </div>
              </div>
          })
        }
        </div>


        {/** NEWS DETAIL */}
        {/* <div className={`${detail === '' ? 'hidden' : 'block'}`}>
            <div 
            onClick={() => setDetail('')}
            className="w-full flex justify-end p-5 cursor-pointer" 
            title="close"><GrClose />
            </div>
            <NewsDetails02 index={detail} />
        </div> */}
      
    </div>
  )
}

export default NewsList02
