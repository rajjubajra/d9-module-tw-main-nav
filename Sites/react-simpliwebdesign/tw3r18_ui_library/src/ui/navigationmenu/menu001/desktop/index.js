import {useState} from 'react';
import MenuLink from "./MenuLink";
import SubMenuLink from './SubMenuLink';
import {VscChromeMinimize} from 'react-icons/vsc';



function Desktop({data}) {

  /** set id of the menu data
   *  if Main Menu contain "children" setView(item.id)
   *  if view === item.id then "css class name will changed"
   */
  const [view, setView] = useState();

  
  console.log("View", view);

  return (
    <div className='flex justify-center my-10'>
      <ul className="relative flex gap-4 font-light tracking-wider">
      {
        data?.menu?.length
        && data.menu.map((item,i)=>{
          const children = item?.children ? true : false;
          return (
              children
              ? <li key={i}
                    onMouseOver={()=> setView(item.id)}
                    onMouseLeave={()=> setView("")}>
                    <MenuLink 
                    name={item.name} to={item.path}  />
                    <ul className={view === item.id ? "": "hidden"}>{item.children.map((child, ci) =>{ 
                      return <li key={ci}><SubMenuLink name={child.name} to={child.path} /></li>})}
                    </ul>
                </li> 
              : <li><MenuLink name={item.name}  to={item.path} /></li>
            )
      })
      }
      </ul>
    </div>
  )
}

export default Desktop
