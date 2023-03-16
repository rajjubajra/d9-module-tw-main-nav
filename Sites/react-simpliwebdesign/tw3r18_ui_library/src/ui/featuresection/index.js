import Feature001 from "./feature001"
import Feature002 from "./feature002"
import Feature003 from "./feature003"
import Feature004 from "./feature004"
import Feature005 from "./feature005"

function Feature() {
  return (
    <div className="container">
      <div>
        <span className="section">Feature Section - 001</span>
        <Feature001 />
      </div>
      <div>
        <span className="section">Feature Section - 002</span>
        <Feature002 />
      </div>
      <div>
        <span className="section">Feature Section - 003</span>
        <Feature003 />
      </div>
      <div>
        <span className="section">Feature Section - 004</span>
        <Feature004 />
      </div>
      <div>
        <span className="section">Feature Section - 005</span>
        <Feature005 />
      </div>
      
    </div>
  )
}

export default Feature
