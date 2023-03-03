import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {actionAll} from '../Redux/Action';


function FetchData() {

  const dispatch = useDispatch();
  const data = useSelector(state=>state.reducerBlog.blog_data);

  useEffect(()=>{
    console.log("test");
    data.length === 0 && dispatch(actionAll());
  },[data.length, dispatch]);

  return (
    <div>
      
    </div>
  )
}

export default FetchData
