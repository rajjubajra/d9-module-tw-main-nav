import {Link} from 'react-router-dom';

function BtnReadMore({link}) {
  return (
    <div>
    <Link 
    className="text-sm font-light border border-gray-500 px-5 py-2 hover:bg-gray-500 hover:text-gray-50" 
    to={link} >Read More</Link>  
    </div>
  )
}

export default BtnReadMore
