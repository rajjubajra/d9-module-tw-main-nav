import {Link} from 'react-router-dom';

const style = "py-2 px-4 border-b mx-2"

function Navigation() {
  return (
    <div className="flex w-full justify-center my-10">
      <Link className={style} to="/articles">Article</Link>
      <Link className={style} to="/new-article">Create new article</Link>
    </div>
  )
}

export default Navigation
