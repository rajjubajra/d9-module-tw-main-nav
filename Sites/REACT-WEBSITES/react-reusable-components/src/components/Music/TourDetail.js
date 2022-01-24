import {useState, useEffect} from 'react'
import BtnBack from '../Buttons/BtnBack';
import BtnTicket from '../Buttons/BtnTicket';



function TourDetail() {

  const [tourdata, setTourdata] = useState([]);
  const [fetched, setFetched] = useState(false);
  
  useEffect(()=>{
    fetch('http://localhost:3000/data/tour.json')
    .then(res => res.json())
    .then( data => setTourdata(data))
    .catch(err => console.log(err));
  },[])

  useEffect(() => {
    tourdata.length > 0 && setFetched(true);
  },[tourdata.length])

  console.log(tourdata);


  return (
    <div className="grid grid-cols-12 max-w-screen-xl m-auto p-10 font-extralight tracking-wide">

      <div className="col-span-11 text-right pr-3">Share</div>
      <div className="text-center">
        <BtnBack />
      </div>

      <div className="col-span-12 pl-10 py-3">
        <h1 className="text-2xl">{ fetched && tourdata[0].event_title}</h1>
      </div>
      
      <div className="col-span-12 pl-10 py-3">
        <div>{ fetched && tourdata[0].date}</div>
      </div>

      <div className="col-span-12 text-right pr-10">
        <BtnTicket />
      </div>

      <div className="col-span-12 p-10">
        <h3>Location:</h3>
        <div>
          { fetched && tourdata[0].venue}
        </div>
      </div>

      <div className="col-span-12 p-10">
        <div className="tracking-wider" dangerouslySetInnerHTML={{__html:  fetched && tourdata[0].details}} />
      </div>

    </div>
  )
}

export default TourDetail