import CardTheme from '../components/CardTheme';
import image02 from '../media/profile-02.jpg';
import image03 from '../media/profile-03.jpg';
import image04 from '../media/profile-04.jpg';
import image05 from '../media/profile-05.jpg';
import {gsap} from 'gsap';
import{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionThemeGallary} from '../redux/themeGalleryListSlice';
import {baseurl} from '../redux/config';


const data = [
  {
    "title": "Profile - Ten [tw3-profile-10]",
    "field_theme_gallery_theme_image": "/yw-d9/sites/default/files/images/profile-10.jpg",
    "uuid": "4c6d0283-7c19-488b-980c-26b5bc8bb0fa",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-10/"
  },
  {
    "title": "Profile - Nine [ tw3-profile-09 ]",
    "field_theme_gallery_theme_image": "/yw-d9/sites/default/files/images/profile-09.jpg",
    "uuid": "9a197cb3-e84a-4e06-9e62-4036d7cbedc4",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-09/"
  },
  {
    "title": "Profile Eight [ tw3-profile-08 ]",
    "field_theme_gallery_theme_image": "/yw-d9/sites/default/files/images/profile-08.jpg",
    "uuid": "69abf4b3-3861-4577-81d8-5ae64b27f11f",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-08/"
  },
  {
    "title": "Profile - Seven [tw3-profile-07]",
    "field_theme_gallery_theme_image": "/yw-d9/sites/default/files/images/profile-07.jpg",
    "uuid": "dc93834a-f840-498e-8431-76311b8b22f9",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-07/"
  },
  {
    "title": "Profile - Six [ tw3-profile-06 ]",
    "field_theme_gallery_theme_image": "/yw-d9/sites/default/files/images/profile-6.jpg",
    "uuid": "d9038463-a467-472c-985f-18dbd1010309",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-06/"
  },
  {
    "title": "Profile - Five [ tw3-profile-05 ]",
    "field_theme_gallery_theme_image": "/yw-d9/sites/default/files/images/profile-05_0.jpg",
    "uuid": "0523be52-158c-4367-9ab6-2c2d1b5c040e",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-05/"
  },
  {
    "title": "Profile - Four [ tw3-profile-04 ]",
    "field_theme_gallery_theme_image": "/yw-d9/sites/default/files/images/profile-04.jpg",
    "uuid": "5e40f94b-b98f-430d-ae1c-bd7857fc4e49",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-04/"
  },
  {
    "title": "Profile - Three [tw3-profile-03]",
    "field_theme_gallery_theme_image": "/yw-d9/sites/default/files/images/profile-03.jpg",
    "uuid": "561f41b8-f71b-4c61-8d7a-23b08fb5033b",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-03"
  },
  {
    "title": "Profile - Two [ tw3-profile-02 ]",
    "field_theme_gallery_theme_image": "/yw-d9/sites/default/files/images/profile02.jpg",
    "uuid": "f3957598-df16-4e31-b65f-56761717d858",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-02/"
  },
  {
    "title": "Profile  - One [tw3-01-profile]",
    "field_theme_gallery_theme_image": "/yw-d9/sites/default/files/images/profile01.jpg",
    "uuid": "f19a8020-41cd-48aa-88cc-19511e34a63b",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-01"
  }
]


function Themes() {

  /** FETCH THEME LIST DATA */
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actionThemeGallary());
  },[dispatch])
  
  const {themegallery, theme_loading, theme_fetched} 
        = useSelector(state => state.theme_gallery);


  /** check local or remote */
  const local = useSelector(state => 
                state.main_menu.localhost);
  /** set data in to 'themelist' state */
  const [ themelist, setThemeList] = useState([]);

  useEffect(() => {
    local ? setThemeList(data) : setThemeList(themegallery);
  },[local, themegallery])

  console.log(themegallery, theme_loading, theme_fetched, local, themelist);
  


  /** GSAP Animation */
  useEffect(()=>{
    gsap.from('.card', {duration:1, opacity:0, stagger:0.5});
  },[])

  return (
    <div className="px-4">

        <h2 className="py-10 font-light md:text-4xl text-3xl tracking-widest">
          Theme Gallery
        </h2>

        <div className="text-xs grid md:grid-cols-2 w-full gap-2 font-light">
          {
            themelist.length > 0 &&
            themelist.map((item,index)=>{
              return <div key={index} className="card">
                <CardTheme 
                    image={item.field_theme_gallery_theme_image}
                    title={item.title}
                    link={item.field_theme_gallery_theme_link}
                />
              </div>
            })
          }
        </div>

        {/* <div className="text-xs grid grid-cols-2 w-full gap-2 font-light">
          <div className="card">
            <CardTheme image={image05} link={`#`} title="Profile-10 -  [tw3-profile-10]"/>
          </div>
          <div className="card">
            <CardTheme image={image04} link={`#`} title="Profile-10 -  [tw3-profile-10]"/>
          </div>
          <div className="card">
            <CardTheme image={image03} link={`#`} title="Profile-10 -  [tw3-profile-10]"/>
          </div>
          <div className="card">
            <CardTheme image={image02} link={`#`} title="Profile-10 -  [tw3-profile-10]"/>
          </div>      
        </div> */}


    </div>
  )
}

export default Themes
