import image02 from '../../media/profile-02.jpg';
import image03 from '../../media/profile-03.jpg';
import image04 from '../../media/profile-04.jpg';
import image05 from '../../media/profile-05.jpg';
import image06 from '../../media/profile-06.jpg';
import image07 from '../../media/profile-07.jpg';
import image08 from '../../media/profile-08.jpg';
import image09 from '../../media/profile-09.jpg';
import image10 from '../../media/profile-10.jpg';
import image01 from '../../media/profile-01.jpg';
import ThemeContainer from './ThemeContainer';
import mainmenu from './mainmenu.json';
import {useEffect, useState} from 'react';




const data = 
[
  {
    "title": "Event Management 01 [ tw3-event-mgt-01 ]",
    "field_theme_gallery_theme_image": "",
    "uuid": "0f8758d6-b558-40fc-b1a2-cb825cb2833b",
    "term_node_tid": "Event Management, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-event-mgt/event-mgt-01",
    "field_tags": "",
    "field_theme_gallery_theme_group": "40"
  },
  {
    "title": "Profile Eleven [ tw3r18-profile-11]",
    "field_theme_gallery_theme_image": image02,
    "uuid": "a9d2e3c8-337f-497d-abf2-a9fbdda086d4",
    "term_node_tid": "Business, Profile, Services, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3r18-profile-11/",
    "field_tags": "",
    "field_theme_gallery_theme_group": "4, 37, 2"
  },
  {
    "title": "Profile - Ten [tw3-profile-10]",
    "field_theme_gallery_theme_image": image10,
    "uuid": "4c6d0283-7c19-488b-980c-26b5bc8bb0fa",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3r18-profile-10/",
    "field_tags": "",
    "field_theme_gallery_theme_group": "4, 37"
  },
  {
    "title": "Profile - Nine [ tw3-profile-09 ]",
    "field_theme_gallery_theme_image": image09,
    "uuid": "9a197cb3-e84a-4e06-9e62-4036d7cbedc4",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-09/",
    "field_tags": "",
    "field_theme_gallery_theme_group": "4, 37"
  },
  {
    "title": "Profile Eight [ tw3-profile-08 ]",
    "field_theme_gallery_theme_image": image08,
    "uuid": "69abf4b3-3861-4577-81d8-5ae64b27f11f",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-08/",
    "field_tags": "",
    "field_theme_gallery_theme_group": "4, 37"
  },
  {
    "title": "Profile - Seven [tw3-profile-07]",
    "field_theme_gallery_theme_image":image07,
    "uuid": "dc93834a-f840-498e-8431-76311b8b22f9",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-07/",
    "field_tags": "",
    "field_theme_gallery_theme_group": "4, 37"
  },
  {
    "title": "Profile - Six [ tw3-profile-06 ]",
    "field_theme_gallery_theme_image": image06,
    "uuid": "d9038463-a467-472c-985f-18dbd1010309",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-06/",
    "field_tags": "",
    "field_theme_gallery_theme_group": "4, 37"
  },
  {
    "title": "Profile - Five [ tw3-profile-05 ]",
    "field_theme_gallery_theme_image": image05,
    "uuid": "0523be52-158c-4367-9ab6-2c2d1b5c040e",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-05/",
    "field_tags": "",
    "field_theme_gallery_theme_group": "4, 37"
  },
  {
    "title": "Profile - Four [ tw3-profile-04 ]",
    "field_theme_gallery_theme_image":image04,
    "uuid": "5e40f94b-b98f-430d-ae1c-bd7857fc4e49",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-04/",
    "field_tags": "",
    "field_theme_gallery_theme_group": "4, 37"
  },
  {
    "title": "Profile - Three [tw3-profile-03]",
    "field_theme_gallery_theme_image": image03,
    "uuid": "561f41b8-f71b-4c61-8d7a-23b08fb5033b",
    "term_node_tid": "Business, Profile, Wesbite Themes",
    "field_theme_gallery_theme_link": "https://themes.rdbajra.com/react-profile/tw3-profile-03",
    "field_tags": "",
    "field_theme_gallery_theme_group": "4, 37"
  }
]

/** Id of submenu "Theme Gallery" */
const themeGalleryId = "menu_link_content:0cc89017-7c66-405b-b658-45fe12ce66a4";





function ThemesLocal({categoryId}) {

  /** Sub-menus of the Theme Gallery */
  const [menu, setMenu] = useState([]);

  /** Creats new menu-array only sub-menu of the "Theme Gallery" */
  useEffect(()=>{
    const arr = [];
    mainmenu?.data?.map(item=>{
      const {title, url, weight} = item.attributes;
      return item.attributes.parent === themeGalleryId &&
        arr.push({ 
          "id": item.id,
          "title": title,
          "url": url,
          "weight": weight
        })
    })
    /** set arr into menu in accending order */
    setMenu(arr.sort(function(a,b){return a.weight > b.weight}));
  },[])

  //console.log(mainmenu);//all menu data
  //console.log(menu);//sub-menu of the Theme Gallery only




  /** Sorted by Category Id */
  const [themelist, setThemeList] = useState([]);

  /** Sorty only Theme list for selected Category Id [Taxonomy - Tags] */
  useEffect(()=> {
    const arr = [];
    data?.map((item)=> {
       /** Taxonomy Id comman value into array without any blank space */
      let catIdArr = item.field_theme_gallery_theme_group.replace(' ','').split(",");
      return catIdArr.includes(categoryId) &&
      arr.push({
        "title": item.title,
        "field_theme_gallery_theme_image": item.field_theme_gallery_theme_image,
        "uuid": item.uuid,
        "term_node_tid": item.term_node_tid,
        "field_theme_gallery_theme_link": item.field_theme_gallery_theme_link,
        "field_tags": item.field_tags,
        "field_theme_gallery_theme_group": item.field_theme_gallery_theme_group
      })
    })
    setThemeList(arr);
  },[categoryId])

  console.log("THEME LIST",themelist);



  return (<ThemeContainer themelist={themelist} menu={menu} />)
}

export default ThemesLocal