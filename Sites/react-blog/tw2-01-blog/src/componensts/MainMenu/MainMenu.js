import {Link} from 'react-router-dom';


function MainMenu({showHideNav, data}) {

  return (
    <div className="grid gap-2 md:flex font-thin text-sm">
    {
      data.length > 0 &&
      data.map(item=>{
        return <div key={item.key}>
            <Link  
            to={`/d9-blog/themes/tw2-01/${item.uri.replace("base:","")}`}
            onClick={showHideNav}
            className="px-3 py-2">
              {item.title}
            </Link>
          </div>       
      }) 
    }
    </div>
  )
}

export default MainMenu