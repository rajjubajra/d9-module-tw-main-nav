import React,{useEffect, useState} from 'react';
import {GrFormNextLink, GrClose} from 'react-icons/gr';


function TourList02() {

  const [tourdata, setTourdata] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [event, setEvent] = useState(0);
  const [viewDetail, setViewDetail] = useState(false);
  
  useEffect(()=>{
    fetch('http://localhost:3000/data/tour.json')
    .then(res => res.json())
    .then( data => setTourdata(data))
    .catch(err => console.log(err));
  },[])

  useEffect(() => {
    tourdata.length > 0 && setFetched(true);
  },[tourdata.length])


  function view(index){
    setEvent(index);
    setViewDetail(true);
  }

 

  console.log("view details",viewDetail);

  return (
    <div className="w-full max-w-screen-xl m-auto p-10 relative
    grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-2">

      {/** TOUR LIST */}
      <div>
        <h2 className="text-3xl">Tour</h2>
        {
          fetched &&
          tourdata.map((item, index) => {
              return  <div key={item.id} className="grid grid-cols-12 grid-flow-row gap-2 py-5
              border-t border-gray-300">
                <div className="col-span-12">{item.data}</div>
                <div className="col-span-12">
                  <h2 className="text-2xl">{item.event_title}</h2>
                  <div>{item.venue}</div>
                </div>
                <div className="col-span-6 border border-gray-200">
                  <div className="cursor-pointer p-2 text-sm flex"
                    onClick={() => view(index)} >
                  <div>View Detail</div>
                  <div className="pt-1 px-2"><GrFormNextLink /></div>
                </div>
                </div>
                <div className="col-span-6 border border-gray-200 p-2">Ticket</div>
              </div>
          })
        }
      </div>
      {/** TOUR DETAILS */}
      <div className={`${viewDetail ? 'block' : 'hidden'} 
      absolute top-0 md:relative z-10 bg-white
      p-10 md:block`}>

        <div className="w-full flex justify-end">
          <div className="cursor-pointer md:hidden" 
          onClick={() => setViewDetail(false)} >
            <GrClose />
          </div>    
        </div>
        
        
        <h2 className="text-3xl">
          {fetched && tourdata[event].event_title}
        </h2>
        <div className="grid grid-col-12 grid-flow-row gap-5">
          <div className="col-span-6">
            <div className="h-40 flex justify-center items-center border border-gray-300">
              {fetched && tourdata[event].date}
            </div>
          </div>
          <div className="col-span-6">
            <div className="h-40 flex justify-center items-center border border-gray-300">
              Ticket
            </div>
          </div>

          <div className="col-span-12">
            <h3>Location</h3>
            <div>{fetched && tourdata[event].venue}</div>
          </div>
          
          <div className="col-span-12">
            <div>{ fetched && 
              <div dangerouslySetInnerHTML={{__html: tourdata[event].details}} />
              } 
            </div>
          </div>

        </div>
      </div>

      
    </div>
  )
}

export default TourList02
