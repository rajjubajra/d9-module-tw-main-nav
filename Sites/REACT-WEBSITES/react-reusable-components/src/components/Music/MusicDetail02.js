import React,{useEffect, useState} from 'react';
import {RiAmazonFill} from 'react-icons/ri';
import {FaSpotify, FaGooglePlay, FaYoutube} from 'react-icons/fa';
import {SiApplemusic} from 'react-icons/si';
import {AiOutlinePlayCircle} from 'react-icons/ai';
import ImageOnload from '../ImageOnload';


function MusicDetail02() {

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
    <div className="w-full max-w-screen-xl m-auto p-10">
      <div className="grid grid-cols-2 grid-flow-row">
        <div>
          <h3 className="text-3xl my-5">{fetched && listdata[0].title}</h3>
          <div>
            {fetched && <ImageOnload src={listdata[0].image} />}
          </div>
          <div className="my-6">
            <div dangerouslySetInnerHTML={{__html: fetched && listdata[0].body}} />
          </div>
        </div>
        <div className="px-10">
          <h3 className="text-2xl">Play List:</h3>
          <div className="my-10 grid grid-cols-1 grid-flow-row gap-7">
            <div className="p-10 border border-gray-200 cursor-pointer"><RiAmazonFill /></div>
            <div className="p-10 border border-gray-200 cursor-pointer"><FaSpotify /></div>
            <div className="p-10 border border-gray-200 cursor-pointer"><FaGooglePlay /></div>
            <div className="p-10 border border-gray-200 cursor-pointer"><FaYoutube /></div>
            <div className="p-10 border border-gray-200 cursor-pointer"><SiApplemusic /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicDetail02
