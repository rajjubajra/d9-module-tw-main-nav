import {Link} from 'react-router-dom';

function MenuLink({name, to}) {
  return (
    <Link className='flex w-24 py-1 border-b-4 hover:border-b-4 hover:border-blue-500 justify-center' to={to}>{name}</Link>
  )
}

export default MenuLink
