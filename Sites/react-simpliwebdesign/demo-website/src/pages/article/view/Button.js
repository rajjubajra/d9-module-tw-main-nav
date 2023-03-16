import { Link } from 'react-router-dom';

function Button({path,name}) {
  //console.log(path, name);
  return (

    <Link
    to={path}
    className="cursor-pointer">
    {name}</Link>
  
  )
}

export default Button
