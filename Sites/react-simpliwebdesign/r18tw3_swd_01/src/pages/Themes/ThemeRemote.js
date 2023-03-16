import{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionThemeGallary} from '../../redux/themeGalleryListSlice';
import ThemeContainer from './ThemeContainer';
import Spinner from '../../components/Spinner';





/** Id of submenu "Theme Gallery" */
const themeGalleryId = "menu_link_content:0cc89017-7c66-405b-b658-45fe12ce66a4";



function ThemeRemote({categoryId}) {

  /** FETCH THEME LIST DATA */
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actionThemeGallary());
  },[dispatch])

  /** Fetch Main-Menu Under Gallery/Theme-Gallery sub Menus */
  const {mainmenu, loading, fetched } = useSelector(state => state.main_menu);
  console.log("MAIN MENU - ",mainmenu, loading, fetched);

  /** Sub-menus of the Theme Gallery */
  const [menu, setMenu] = useState([]);

  /** Creats new menu-array only sub-menu of the "Theme Gallery" */
  useEffect(()=>{
    const arr = [];
    mainmenu?.map(item=>{
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
  },[mainmenu])

  console.log(mainmenu);//all menu data
  console.log(menu);//sub-menu of the Theme Gallery only


  
  /** Fetching Theme List  */
  const {themegallery, theme_loading, theme_fetched} 
        = useSelector(state => state.theme_gallery);


  // /** set JSON data in to 'themelist' state */
  // const [ themelist, setThemeList] = useState([]);

  // useEffect(() => {
  //   setThemeList(themegallery);
  // },[themegallery])

  /** Sorted by Category Id */
  const [themelist, setThemeList] = useState([]);

  /** Sorty only Theme list for selected Category Id [Taxonomy - Tags] */
  useEffect(()=> {
    const arr = [];
    themegallery?.map((item)=> {
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
  },[categoryId, themegallery])

  console.log("THEME LIST",themelist);
  console.log(themegallery, theme_loading, theme_fetched, themelist);
  
  return (
    theme_loading 
    ? <Spinner />
    : <ThemeContainer themelist={themelist} menu={menu} />
  )
}

export default ThemeRemote