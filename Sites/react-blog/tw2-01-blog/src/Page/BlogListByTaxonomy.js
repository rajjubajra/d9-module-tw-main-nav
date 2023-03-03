import {useParams} from 'react-router-dom';
import BlogListTwo from './Blog/BlogListTwo';


function BlogListByTaxonomy() {
  let {tid} = useParams();
  /** BLOG SORT BY TAG ID */ 
  return (
    <BlogListTwo tid={tid} />
  )  
}

export default BlogListByTaxonomy