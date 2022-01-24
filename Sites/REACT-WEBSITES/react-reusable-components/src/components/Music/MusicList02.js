import {useState, useEffect} from 'react'
import ImageOnload from '../ImageOnload'

function MusicList02() {

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
    <div className="w-full max-w-screen-xl m-auto p-10">

      <div className="grid grid-cols-8 lg:grid-row-2 md:grid-rows-3 gap-4 ">

        <div className="
        col-span-8
        lg:col-span-2 lg:row-span-2
        md:col-span-2 md:row-span-3">
          <div>
            {fetched && <ImageOnload 
            cssClass="md:h-96 md:w-3/4 object-cover
            h-40 w-full p-3 md:p-0 border border-gray-900"
            src={listdata[0].image} />}
            <div className="text-sm">{ fetched && listdata[0].title}</div>
          </div>
        </div>
        <div className="col-span-8 lg:col-span-2 md:col-span-3">
          <div>
            {fetched && <ImageOnload
            cssClass="border border-gray-900"
            src={listdata[1].image} />}
          </div>
          <div className="text-sm">{fetched && listdata[1].title}</div>
        </div>
        <div className="col-span-8 lg:col-span-2 md:col-span-3">
          <div>
            {fetched && <ImageOnload 
              cssClass="border border-gray-900"
              src={listdata[2].image} />}
          </div>
          <div className="text-sm">{fetched && listdata[2].title}</div>
        </div>
        <div className="col-span-8 lg:col-span-2 md:col-span-3">
          <div>
            {fetched && <ImageOnload 
              cssClass="border border-gray-900"
              src={listdata[3].image} />}
          </div>
          <div className="text-sm">{fetched && listdata[3].title}</div>
        </div>
        <div className="col-span-8 lg:col-span-2 md:col-span-3">
          <div>
            {fetched && <ImageOnload 
              cssClass="border border-gray-900"
              src={listdata[4].image} />}
          </div>
          <div className="text-sm">{ fetched && listdata[4].title}</div>
        </div>
        <div className="col-span-8 lg:col-span-2 md:col-span-3">
          <div>
            {fetched && <ImageOnload
              cssClass="border border-gray-900" 
              src={listdata[5].image} />}
          </div>
          <div className="text-sm">{fetched && listdata[5].title}</div>
        </div>
        <div className="col-span-8 lg:col-span-2 md:col-span-3">
          <div>
            {fetched && <ImageOnload  
              cssClass="border border-gray-900"
              src={listdata[6].image} />}
          </div>
          <div className="text-sm">{fetched && listdata[6].title}</div>
        </div>
      </div>
      
    </div>
  )
}

export default MusicList02
