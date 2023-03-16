import { useState } from "react";
import Desktop from "./desktop";
import Mobile from "./mobile";

function Menu001({data}) {

  const [state, setState] = useState(true);


  return (
    <div>
      <div>
          <ul className="flex w-full justify-center">
            <li 
            onClick={()=> setState(true)}
            className="mx-4 my-2 border-b-4 hover:border-blue-500 cursor-pointer">Desktop</li>
            <li 
            onClick={()=> setState(false)}
            className="mx-4 my-2 border-b-4 hover:border-blue-500 cursor-pointer">Mobile</li>
          </ul>
      </div>
      <div className="w-full flex justify-center my-10">
      {
        state 
        ? <Desktop data={data} /> 
        : <Mobile data={data} />
      }
      </div>
      
      
    </div>
  )
}

export default Menu001
