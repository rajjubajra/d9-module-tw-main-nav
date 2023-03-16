import {Link} from 'react-router-dom';




function Nav() {


  return (
    <ul className="flex text-sm font-thin">
        <li>
          <Link to="/home"  className="mx-2 px-4 py-2 border-b">Home</Link>
        </li>
        <li>
          <Link to="/about"  className="mx-2 px-4 py-2 border-b">about</Link>
        </li>
        <li>
          <Link to="/explore"  className="mx-2 px-4 py-2 border-b">explore</Link>
        </li>
      </ul>
  )
}

export default Nav