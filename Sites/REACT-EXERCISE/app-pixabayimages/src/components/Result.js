import React from 'react';
import Masonry from 'react-masonry-css';

class Result extends React.Component{
  state = {
    data: [],
    route: 'home'
  }
  
  componentDidMount(props){
    /** FETCH IMAGES TO PREVIEW [ IF SEARCH RESULT IS EMPTY ] */
    const {apiKey, apiUrl} = this.props;
    const query = 'japanese garden';
    fetch(`${apiUrl}/?key=${apiKey}&q=${query}&image_type=photo&per_page=10&min_width=600&min_height:300`)
    .then((response) => response.json())
    .then( data => this.setState({data: data.hits}))
    .catch(err => console.log(err));;
  }

  render(props){
        const { imgArr, navPage } = this.props;
        /** Masonry CSS Breakpoint */
        const breakpointColumnsObj = {
          default: imgArr.length < 1 ? 2 : 4,
          1100: 3,
          700: 2,
          500: 1
        };


                 
        /** if search data is empty Preview 10 Images as Home page */
        const imgPreview = this.state.data.map((img)=>{
          return(
            <section key={img.id} className='preview'
            onClick={()=>navPage('detail', 
                                          img.largeImageURL,
                                          img.likes,
                                          img.downloads,
                                          img.favorites,
                                          img.user,
                                          img.tags
                                          )}
            >
               <div><img style={{width:'100%'}} src={img.largeImageURL} alt={img.type} /></div>
            </section>
          )
       });
       /** SEARCH RESULT IMAGE ARRAY */
        let imgCounter = 1;
        const resultArry = imgArr.map((img) =>{
                  return (
                    <section className='preview' key={img.id} 
                    onClick={()=>navPage('detail', 
                                          img.largeImageURL,
                                          img.likes,
                                          img.downloads,
                                          img.favorites,
                                          img.user,
                                          img.tags
                                          )}
                    >
                      <div>
                        <img 
                          style={{width: '100%'}}  
                          src={img.largeImageURL} atl={img.type} />
                      </div>
                      <div>
                        <span>{imgCounter++} : </span>
                        <span>{img.tags.length > 25 ? img.tags.substring(0,25) + '..' : img.tags}</span>
                        <span className='right'>
                          <span><i className="fas fa-thumbs-up"></i>{img.likes}</span>
                          <span><i className="fas fa-download"></i>{img.downloads}</span>
                        </span>     
                      </div>      
                    </section>
                  )});

        /** Images preview as Home page, if search result is empty */          
        const view = imgArr.length > 0  ? resultArry : imgPreview;    
      
        return(
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
                {view}
        </Masonry>
      )
  }

}
export default Result;