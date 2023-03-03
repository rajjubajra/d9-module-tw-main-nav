import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function Tags() {
  
  const state = useSelector(state => state.reducerTaxonomy.taxonomy_data);

  return (
    <div>
      <h1 className="my-5">Taxonomy</h1>
      <div className="flex flex-row">
      {
        state.length > 0 &&
        state.map(item=>{
          let tagname = item.name
          return <div className="m-2" key={item.tid}>
            <Link to={`/d9-blog/themes/tw2-01/blogs-by-tag/${item.tid}`}>{tagname.substring(0,15)}</Link>
            </div>
        })
      }
      </div>
    </div>
  )
}

export default Tags