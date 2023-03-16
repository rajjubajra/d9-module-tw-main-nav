import {landing1, landing2, landing3, landing4} from '../../assets';
import Landing001 from './landing001';
import Landing002 from './landing002';
import Landing003 from './landing003';
import {useLoaderData} from 'react-router-dom';



export async function loader(){
  return {
    data:[
    { 
      "id": 1,
      "text": "Dancing is the poetry of the foot.",
      "by": 'John Dryden',
      "image": landing1,
      "text_colour": "text-gray-200"
    },
    { 
      "id": 2,
      "text": "Dancing is a vertical expression of a horizontal desire." ,
      "by": 'Robert Frost',
      "image": landing2,
      "text_colour": "text-gray-200"
    },
    { 
      "id": 3,
      "text": "Dance is the hidden language of the soul.",
      "by": "Martha Graham",
      "image": landing3,
      "text_colour": "text-black"
    }, 
    {
      "id": 4,
      "text": "In dancing, we express ourselves as a whole, with the whole of our being.",
      "image": landing4,
      "by": "Alvin Ailey",
      "text_colour": "text-black"
    }],
  }
  
}


function Landing() {

  
  const {data} = useLoaderData();
  //console.log(data);

  return (
    <div>
      <div>
        <span className="section">Landing Page - 001</span>
        <Landing001  data={data} />
      </div>
      <div>
        <span className="section">Landing Page - 002</span>
        <Landing002 />
      </div>
      <div>
        <span className="section">Landing Page - 003</span>
        <Landing003 />
      </div>
      
    </div>
  )
}

export default Landing
