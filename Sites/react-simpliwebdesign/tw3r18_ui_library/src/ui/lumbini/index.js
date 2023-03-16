import Landing001 from './landing001';
import quoteData from './data.json';
import {useLoaderData} from 'react-router-dom';



export async function loader(){
  //console.log(quoteData);
  return quoteData;
}

export default function Lumbini() {

  const quoteData = useLoaderData();

  return (
    <div>
      <div>
        <span className="section">Landing Page - 001</span>
        <Landing001 quoteData={quoteData} />
      </div>
    </div>
  )
}
