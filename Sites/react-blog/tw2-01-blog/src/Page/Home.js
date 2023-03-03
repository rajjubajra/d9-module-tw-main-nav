import BlogListOne from './Blog/BlogListOne';
import BlogListTwo from './Blog/BlogListTwo';
import FetchData from '../componensts/FetchData';
import {useSelector} from 'react-redux';


function Home() {

  const data = useSelector(state=>state.reducerBlog.blog_data);

  console.log("DATA?", data);

  return (
    <div>
      <FetchData />
      <h1>HOME PAGE</h1>
      <BlogListOne  data={data} />
      <BlogListTwo data={data} />
    </div>
  )
}

export default Home