import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function BlogSearch() {

  const state = useSelector(state => state.reducerBlog.blog_data);

  
  const [searchWord, setSearchWord] = useState();
  const [result, setResult] = useState([]);

  useEffect(()=>{
    /** SERACH item body and title */
    state.length > 0 && searchWord &&
    setResult(state.filter((item)=> 
    item.body.toLowerCase().includes(searchWord.toLowerCase()) ||
    item.title.toLowerCase().includes(searchWord.toLowerCase())
    ))
  },[searchWord, state])

  console.log(searchWord, result, state);

   /** HILIGHTs the SEARCH RESULT THAT MATCH QUERY */
   function highlightQuery(query, text) {
    let term = query; // search query we want to highlight in results 
    let results = text; // search results
    // "g" for global, "i" for case-insensitive
    return results.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`);
  }

  return (
    <div>
    <div className="m-5">
      <h1 className="text-2xl">Search</h1>
      <input 
      className="w-96 p-2 border" 
      type="text" 
      onChange={(e)=>setSearchWord(e.target.value)} 
      value={searchWord} />
    </div>
    {
      result.length > 0 &&
      result.map((item)=>{
        let body = item.body.substring(0,250);
        let title = highlightQuery(searchWord, item.title);
        return <div key={item.nid} className="my-10 border p-10">
          <h2 className="text-2xl">
            <div dangerouslySetInnerHTML={{__html: title}} />
          </h2>
          <div className="mb-5" dangerouslySetInnerHTML={{__html: body}} />
          <Link className="border px-6 py-2 my-5" to={`/blog-post/${item.nid}`}>Read</Link>
        </div>
      })
    }
    </div>
  )
}

export default BlogSearch