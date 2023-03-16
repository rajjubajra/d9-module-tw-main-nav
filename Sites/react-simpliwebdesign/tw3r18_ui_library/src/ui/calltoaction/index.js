import Cta001 from './cta001'
import Cta002 from './cta002'
import Cta003 from './cta003'
import Cta004 from './cta004'
import Readme from './Readme'
import data from './data.json';

function Calltoaction() {
  return (
    <div className='container'>
      <div>
        <span className="section">Call To Action - 001</span>
        <Cta001 data={data} />
      </div>
      <div>
        <span className="section">Call To Action - 002</span>
        <Cta002 data={data} />
      </div>
      <div>
        <span className="section">Call To Action - 003</span>
        <Cta003 data={data} />
      </div>
      <div>
        <span className="section">Call To Action - 004</span>
        <Cta004 data={data} />
      </div>


      <div className='mt-56'>
        <Readme />
      </div>
      
    </div>
  )
}

export default Calltoaction
