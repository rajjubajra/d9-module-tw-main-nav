import {useSelector} from 'react-redux';
import BlogCard from './BlogCard';


function BlogListOfTheMonth({YearMonth}) {

  const state = useSelector(state => state.reducerBlog.blog_data); 
  
  return (
    <div>
    {
      state.length > 0 &&
      state.map(item=>{
        let year = new Date(item.created).getFullYear()
        let month = new Date(item.created).getMonth()
        let year_month = `${year}-${month}`
        //console.log(year_month, YearMonth);
        return YearMonth === year_month &&
        <BlogCard 
            key={item.nid}
            title={item.title}
            nid={item.nid}
            body_1={item.body_1}
            field_tags={item.field_tags}
            created={item.created}
          />
      })
    }
    </div>
  )
}

export default BlogListOfTheMonth
