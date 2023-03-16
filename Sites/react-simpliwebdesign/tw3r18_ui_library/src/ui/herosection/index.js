import {Hero001, Hero002, Hero003, Hero004, Hero005, Hero006} from './hero';

function HeroSection() {
  return (
    <div className='container'>
      <div>
        <span className="section">hero - 001</span>
        <Hero001 />
      </div>
      <div>
        <span className="section">hero - 002</span>
        <Hero002 />
      </div>
      <div>
        <span className="section">hero - 003</span>
        <Hero003 />
      </div>
      <div>
        <span className="section">hero - 004</span>
        <Hero004 />
      </div>
      <div>
        <span className="section">hero - 005</span>
        <Hero005 />
      </div>
      <div>
        <span className="section">hero - 006</span>
        <Hero006 />
      </div>
    </div>
  )
}

export default HeroSection
