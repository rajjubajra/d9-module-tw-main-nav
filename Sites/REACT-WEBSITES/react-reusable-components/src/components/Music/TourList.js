import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';




function TourList() {

  const [tourdata, setTourdata] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:3000/data/tour.json')
    .then(res => res.json())
    .then( data => setTourdata(data))
    .catch(err => console.log(err));
  },[])

  //console.log(tourdata);

  return (
    <div className="max-w-screen-xl m-auto p-10 mb-6 font-extralight">
      {
        tourdata.length > 0 &&
        tourdata.map( item => {
          return <div key={item.id} 
          className="grid grid-rows-3 gap-1
                    md:grid-cols-7 md:grid-rows-1 mb-8">
            <div className="border border-gray-300 p-2 col-span-2 
                            md:col-span-1">{item.date}</div>
            <div className="border border-gray-300 col-span-2
                            md:col-span-4 p-2">
              <div>
                <h2>{item.event_title}</h2>
                <div>{item.venue}</div>
              </div>
            </div>
            <div className="border border-gray-300 
                            md:col-span-1 p-2">
                <Link to="#">Details</Link>
            </div>  
            <div className="border border-gray-300 p-2">Ticket</div>      
          </div>
        })
      }
      
    </div>
  )
}
 
export default TourList
