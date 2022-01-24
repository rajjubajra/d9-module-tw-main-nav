import {useState, useEffect} from 'react';
import ImageOnload from '../ImageOnload';
import BtnBack from '../Buttons/BtnBack';
import {RiAmazonFill} from 'react-icons/ri';
import {FaSpotify, FaGooglePlay, FaYoutube} from 'react-icons/fa';
import {SiApplemusic} from 'react-icons/si';
import {AiOutlinePlayCircle} from 'react-icons/ai';


function MusicDetail() {

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

  function PlayMusic(track){
      return <div className="flex flex-row h-10">
        <div className='py-1 px-4'><AiOutlinePlayCircle /></div>
        <div>Track - {track} </div>
      </div>
  }


  return (
    <div className="grid grid-cols-12 gap-8 max-w-screen-xl m-auto p-10 font-extralight tracking-wide">

      <div className="col-span-11 text-right">share</div>
      <div className="text-center"><BtnBack /></div>
      
      <div className="col-span-12 md:col-span-6">
        <div>
          <div>
            <h3 className="text-3xl my-5">{fetched && listdata[0].title}</h3>
          </div>
          <div>
            {fetched && <ImageOnload src={listdata[0].image} />}
          </div>
          <div className="my-6">
            <div dangerouslySetInnerHTML={{__html: fetched && listdata[0].body}} />
          </div>
        </div>
      </div>
      
      <div className="col-span-12 md:col-span-6">

        <div className="px-10">
          <h3 className="py-4">Shop</h3>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div><RiAmazonFill /></div>
            <div><FaSpotify /></div>
            <div><FaGooglePlay /></div>
            <div><SiApplemusic /></div>
          </div>
        </div>

        <div className="px-10 py-8">
          <h3 className="py-4">Listen</h3>
          <div className="grid grid-cols-6 grid-rows-1">
            <div><FaYoutube /></div>
            <div><FaSpotify /></div>
            <div><SiApplemusic /></div>
          </div>
        </div>


        <div className="px-10 py-8">
          <h3 className="py-4">Play</h3>
          <div className="flex flex-row">
            {PlayMusic("Music 1")}
          </div>
          <div className="flex flex-row">
            {PlayMusic("Music 2")}
          </div>
          <div className="flex flex-row">
            {PlayMusic("Music 3")}
          </div>
          <div className="flex flex-row">
            {PlayMusic("Music 4")}
          </div>
          <div className="flex flex-row">
            {PlayMusic("Music 5")}
          </div>
          <div className="flex flex-row">
            {PlayMusic("Music 6")}
          </div>
        </div>

      </div>
    </div>
  )
}

export default MusicDetail
