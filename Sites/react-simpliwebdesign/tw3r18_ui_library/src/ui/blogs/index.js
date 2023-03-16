import data from './data.json';
import { blog01, blog02, blog03,blog04, blog05, blog06, blog07, blog08, blog09, blog10 } from '../../assets';
import Blog001 from './blog001'
import Blog002 from './blog002'
import Blog003 from './blog003';


const images = [blog01, blog02, blog03, blog04, blog05, blog06, blog07, blog08, blog09, blog10]


function Blogs() {
  return (
    <div>
      <div>
        <span className="section">Blog - 001</span>
        <Blog001 data={data} images={images} />
      </div> 
      <div>
        <span className="section">Blog - 003</span>
        <Blog003 data={data} images={images} />
      </div> 
      <div>
        <span className="section">Blog - 002</span>
        <Blog002 data={data} />
      </div>  
    </div>
  )
}

export default Blogs
