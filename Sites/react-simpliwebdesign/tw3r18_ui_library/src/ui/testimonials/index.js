import Reviews001 from "./reviews001"
import Reviews002 from "./reviews002"
import Reviews003 from "./reviews003";
import Reviews004 from "./reviews004";
import Reviews005 from "./reviews005";
import data from './data.json';
import {people01,people02,people03,people04,people05,people06,people07,people08,people09,people10,} from '../../assets';





const people = [people01, people02, people03, people04, people05, people06, people07, people08, people09, people10]


function Testimonials() {
  return (
    <div className="container">
      <div>
        <span className="section">Testimonials Page - 001</span>
        <Reviews001 data={data} />
      </div>
      <div>
        <span className="section">Testimonials Page - 002</span>
        <Reviews002 data={data} people={people} />
      </div>
      <div>
        <span className="section">Testimonials Page - 003</span>
        <Reviews003 data={data} />
      </div>
      <div>
        <span className="section">Testimonials Page - 004</span>
        <Reviews004 data={data} />
      </div>
      <div>
        <span className="section">Testimonials Page - 005</span>
        <Reviews005 data={data} />
      </div>
      
    </div>
  )
}

export default Testimonials
