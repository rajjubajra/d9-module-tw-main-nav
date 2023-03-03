import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {baseurl_nav} from '../../config/baseurl';

function BlogCard({title, body_1, nid, field_tags, created, index }) {

  /**
   *  --- Using getDate() ---
   *  var dt = new Date('December 25, 1995 23:15:30');
   *  var day = dt.getDate();
   *  console.log(day); // 25
   */

  const [tag, setTag] = useState('');
  let dt = new Date(created);
  //console.log("DATE?", dt.getFullYear());

  useEffect(()=>{
    /**
   * Field Tags
   * substring
   */
    const tag_arr = field_tags.split(',');
    console.log("TAG ARRAY",tag_arr);
    const newArr = []
    tag_arr.length > 0 &&
    tag_arr.map((item) => {
      return newArr.push(item.substring(0,12).toUpperCase()); 
    })   
    
    setTag(newArr.join(","));
    
  },[field_tags])
  
  //console.log("TAG NEW",tag);

  const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  
  return (
    <div className="p-5 border-1 border my-5 border-gray-300">
        <div className="mb-4">
          <h1 className="text-2xl">{title}</h1>
          <div className="my-2 flex justify-end font-thin">
            Date:{dt.getDate()} {monthArr[dt.getMonth()]}, {dt.getFullYear()}</div>
          <div>
            <div dangerouslySetInnerHTML={{__html: body_1 + '...'}} />
          </div>
        </div>
        <div className="flex flex-row">
          <Link 
          className="border border-gray-600 px-5 py-1" 
          to={`${baseurl_nav.URL}/blog-post/${nid}`}>
              More</Link>
          <p className="ml-10 text-xs font-bold">Tag: {tag}</p>
        </div>
        <div className="w-full text-xs mt-4 font-thin flex justify-center">Index - {index}</div>
    </div>
  )
}

export default BlogCard
