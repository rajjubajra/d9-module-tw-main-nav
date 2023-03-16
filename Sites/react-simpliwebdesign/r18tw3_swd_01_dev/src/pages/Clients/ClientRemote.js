import{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionThemeGallary} from '../../redux/themeGalleryListSlice';
import ClientContainer from './ClientContainer';
import Spinner from '../../components/Spinner';


function ClientRemote() {

  /** FETCH THEME LIST DATA */
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actionThemeGallary());
  },[dispatch])
  
  const {themegallery, theme_loading, theme_fetched} 
        = useSelector(state => state.theme_gallery);


  /** set data in to 'themelist' state */
  const [ themelist, setThemeList] = useState([]);

  useEffect(() => {
    setThemeList(themegallery);
  },[themegallery])

  console.log(themegallery, theme_loading, theme_fetched, themelist);
  
  return (
    theme_loading 
    ? <Spinner />
    : <ClientContainer themelist={themelist} />
  )
}

export default ClientRemote