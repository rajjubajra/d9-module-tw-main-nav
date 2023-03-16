import {Link} from 'react-router-dom'

function SubMenuLink({name, to}) {
  return (
    <Link className='flex border-b-4 hover:border-blue-500 mt-2' to={to}>{name}</Link>
  )
}

export default SubMenuLink
