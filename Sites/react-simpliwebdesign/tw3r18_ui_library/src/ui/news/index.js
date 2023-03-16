import News001 from "./news001";
import newsdata from './news.json';


function News() {
  return (
    <div className="container">
      <div>
        <span className="section">News Page - 001</span>
        <News001 data={newsdata} />
      </div>
    </div>
  )
}

export default News
