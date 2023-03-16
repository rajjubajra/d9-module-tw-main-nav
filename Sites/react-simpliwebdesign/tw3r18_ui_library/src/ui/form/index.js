import Form001 from "./form001"
import Form002 from "./form002"
import Form003 from "./form003"
import Form004 from "./form004"

function Form() {
  return (
    <div>
      <div>
        <span className="section">Form - 001</span>
        <Form001 />
      </div>
      <div>
        <span className="section">Form - 002</span>
        <Form002 />
      </div> 
      <div>
        <span className="section">Form - 003</span>
        <Form003 />
      </div>  
      <div>
        <span className="section">Form - 004</span>
        <Form004 />
      </div>     
    </div>
  )
}

export default Form
