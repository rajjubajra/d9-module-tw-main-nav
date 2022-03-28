import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionSetPage} from '../redux/pagenameSlice';
import {Link} from 'react-router-dom';
import gsap from 'gsap';


const data = [
  {
    "id": 1,
    "name": "Theme",
    "url": "/theme-gallery"
  },
  {
    "id": 1,
    "name": "About",
    "url": "/about"
  },
  {
    "id": 1,
    "name": "Contact",
    "url": "/contact"
  },
]


function BigNav() {


  const {mainmenu, loading, fetched, localhost} = useSelector(state => state.main_menu);
  console.log(mainmenu, loading, fetched, localhost);
  const dispatch = useDispatch();

  console.log(window.location.origin);

  const [mainNav, setMainNav] = useState([]);

  useEffect(()=>{
    let arr = []
    !loading && mainmenu.length > 0 &&
    mainmenu.map(item => {
      return item.attributes.parent === "" &&
      arr.push({
        "id": item.id,
        "name": item.attributes.title,
        "url": item.attributes.url.replace('/yw-d9','') 
      })
    })

    /** check localhost or remote site */
    localhost 
    ? setMainNav(data)
    : setMainNav(arr)

  },[loading, localhost, mainmenu])

  console.log(mainNav);
    
  useEffect(()=>{
    gsap.to('.nav',{delay:0.3, opacity:1, duration: 1, stagger:0.2})
  })


  return (
    <div className="md:h-screen md:flex items-center justify-end w-full">
    <ul className="z-50 text-[10vw] md:-mt-16 mt-28 text-right">
            {
              mainNav.length > 0 &&
              mainNav.map((item,index) => {
                return <li className={`nav opacity-0
                duration-300 font-thin
                hover:-translate-x-1
                hover:text-red-700`} 
                key={index}
                onClick={() => dispatch(actionSetPage(false))}
                >
                  <Link  
                  to={item.url}>
                  {item.name}</Link>
                </li>
              })
            }
          </ul>
          </div>
  )
}

export default BigNav