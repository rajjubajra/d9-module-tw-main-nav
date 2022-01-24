import {useState, useEffect} from 'react'
import ImageOnload from '../ImageOnload'

function MusicList() {

  const [listdata, setListData] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(()=>{
      fetch('http://localhost:3000/data/musiclist.json')
      .then( res => res.json())
      .then( data => setListData(data) )
      .catch( err => console.log(err));
  },[])

  useEffect(()=>{
    listdata.length > 0 && setFetched(true);
  },[listdata.length])

  return (
    <div className="p-10 grid grid-flow-col grid-cols-3 gap-6 font-extralight">
    {
      fetched && listdata.map( item => {
        return <div key={item.id} className="w-full
                lg:max-w-screen-sm">
        <div>
          <h3 className="text-3xl py-4">{item.title}</h3>
        </div>
        <div>
          <ImageOnload cssClass="w-full h-64 object-cover" src={item.image} />
        </div>
        <div className="py-4">
          <div dangerouslySetInnerHTML={{__html: item.body.substring(0,400)}} />
        </div>
      </div>
      })
    }
    </div>
  )
}

export default MusicList
