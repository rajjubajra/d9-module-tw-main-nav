//import {useEffect} from 'react';
import BlogListTwo from './Blog/BlogListTwo';
import Tags from '../componensts/Taxonomy/Tags';
import FormSelectDate from './Blog/FormSelectDate';
import {useSelector} from 'react-redux';
import BlogListOfTheMonth from './Blog/BlogListOfTheMonth';
//import {actionAll} from '../Redux/Action';

function Blog() {
  
  const YearMonth = useSelector(state => state.reducerBlogYearMonth.blog_YearMonth);
  const data = useSelector(state=>state.reducerBlog.blog_data);

  console.log("data",data);
//  const dispatch = useDispatch();

// useEffect(()=>{
//   dispatch(actionAll());
// },[dispatch])


  return (
    <div className="m-10">
      
      <div className="my-10">
        <h1>BLOG POST</h1>
      </div>
      <div>
        <FormSelectDate />
      </div>
      <Tags />
      {
        YearMonth === null ?
        <BlogListTwo data={data} />
        :
        <BlogListOfTheMonth YearMonth={YearMonth} />
      }
    </div>
  )
}

export default Blog
