import {Link} from 'react-router-dom';
import {url} from '../../redux/config'

function ThemeMenu({menu}) {

  console.log(menu);
  return (
    <ul className="flex font-light text-xs lg:-mt-16 mb-3 ">
      {
        menu?.map((item,i)=>{
          let link = item.url.replace(`/${url}/`,"/")
          return <li key={i} className="mr-2">
            <Link to={link} className="px-2 py-1 border">
            {item.title}
            </Link>
          </li>
        })
      }
    </ul>
  )
}

export default ThemeMenu