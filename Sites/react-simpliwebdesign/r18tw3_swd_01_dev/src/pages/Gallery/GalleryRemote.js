import React,{useState, useEffect} from 'react';
import GalleryContainer from './GalleryContainer';
import {useSelector, useDispatch} from 'react-redux';
import {actionGallary} from '../../redux/gallerySlice';
import {actionMediaImage} from '../../redux/mediaImageSlice';


function GalleryRemote() {

  /** run actionGallary() */
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(actionGallary());
      dispatch(actionMediaImage());
    },[dispatch])


  /** Gallery List data */
  const data = useSelector(state => state.gallery_list.gallery);
  console.log(data);

  /** Drupal Media Library JSONAPI */
  const media = useSelector(state => state.media_image);
  console.log(media);



/** Re-arranged Gallery_List JSON data */
const [glData, setGlData] = useState([]);
//console.log("Gallery Listing", glData);


useEffect(()=>{

  /** empty array for push data */
  const arr = [];

  /** Drupal Gallery List  */
  data?.data?.map(item => {
    
    /** media Icon Id from data.Included array */
    let media_image_id = data?.included?.map((elm) => 
          elm?.id === item?.relationships?.field_yw_gallery_icon?.data?.id 
          && elm?.relationships?.field_media_image?.data?.id);

    /** fetch Image URL from Drupal Media JSON DATA **
     * Condition - media_image_id === included.id */      
    let media_data = media?.mediaImage?.included?.find(md => md.id === media_image_id[0]);
    let media_url = media_data?.attributes?.uri?.url;
    console.log(media_data);
    console.log("MEDIA URL",media_url);


    /** PUSH Drupal JSON data in to simple 'Data' Array */
    return arr.push({
      "id": item.id,
      "field_yw_gallery_icon_id": media_image_id[0],
      "icon": media_url,
      "title": item.attributes.title,
      "url": item.attributes.field_yw_gallery_list_url.uri, 
      "urlInternal": item.attributes.field_yw_gallery_list_url.uri.includes("internal:/"),
      "text": "",
      "weight": item.attributes.weight
    })
  });

  /** Set newly created array into glData state with sorting  */
  setGlData(arr.sort(function(a,b){return a.weight > b.weight}));

},[data, media])


  return (
  <GalleryContainer data={glData} />
  )

}

export default GalleryRemote