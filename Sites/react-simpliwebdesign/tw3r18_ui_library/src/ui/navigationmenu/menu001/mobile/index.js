import {useState} from 'react';
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { IconContext } from "react-icons";

import MenuLink from './MenuLink';
import SubMenuLink from './SubMenuLink';


function Mobile({data}) {

  const [state, setState] = useState(true);
  const [view, setView] = useState("");

  return (
    <div className='relative'>

    <div className='w-24'>
      <div className={state ? "cursor-pointer" : "hidden"}>
        <IconContext.Provider value={{ size:"2em" }}>
          <span onClick={()=> setState(false)}><VscMenu /></span>
        </IconContext.Provider>
      </div>
      <div className={state ? "hidden": "cursor-pointer"}>
        <IconContext.Provider value={{ size: "2em" }}>
          <sapn onClick={()=> setState(true)}><VscChromeClose /></sapn> 
        </IconContext.Provider>
      </div>
    </div>
    
    <div>
    <ul className={state ? "hidden" : ""}>
      {
        data?.menu?.map((item,i)=> {
          const children = item.children ? true : false;
          return (
                children 
                ? <li
                    onMouseOver={()=> setView(item.id)}
                    onMouseLeave={()=> setView("")}
                    >
                    <MenuLink name={item.name} to={item.to} />
                    <ul className={view === item.id ? "" : "hidden"}>
                      {
                        item.children.map((child, ci)=> {
                          return <li><SubMenuLink name={child.name} to={child.path} /></li>
                        })
                      }
                    </ul>
                  </li>
                : <li><MenuLink name={item.name} to={item.to} /></li>
          )
        })
      }
    </ul>
    </div>

    </div>
  )
}

export default Mobile
