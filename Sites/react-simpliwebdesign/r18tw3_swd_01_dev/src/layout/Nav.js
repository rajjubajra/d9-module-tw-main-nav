import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {actionSetPage} from '../redux/pagenameSlice';
import logo from '../swd-logo-square.png';


function Nav() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  /** if not homepage "Logo Menu" changed in to the "Home Text" Menu */
  const page = useSelector(state => state.isHomepage.value)

  console.log(page);
  

  return (
      <ul>
        <li className="menu">
          {
            page 
            ? 
            <div className="pt-1 pb-1 pr-2">
            <Link to="/home">
              <img className="px-2 w-12 rotate-90" src={logo} alt="sdw logo" />
            </Link>
            </div>
          : <Link to={navigate(-1)}
                className="text-sm font-thin uppercase" >
                <div onClick={()=> dispatch(actionSetPage(true))}
                      className="pt-1 pb-1 pr-2 duration-300 hover:border-r-black/30">
                      Back</div>
            </Link>

          }
          
        </li>
      </ul>
    
  )
}

export default Nav
