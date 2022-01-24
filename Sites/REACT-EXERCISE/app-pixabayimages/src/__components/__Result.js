import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import Images from './images.json';
import Title from './Title';
import Form from './Form';

const Card = styled.div`
  cursor: pointer; 

> div{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    position: relative;
    top: -20px;
    left: 5px;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
}

> div > .tags{
    position: absolute;
    right: 10px;
}

> div > .likes{
    margin-right: 5px;
}


>  img{
    width: 100%;
}
    
`;


   

class Result extends React.Component {




  render(props) {
   
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };

    const childElements = this.props.data.map((element) => {
         return (
              <Card key={element.id} 
                    className="image-element-class" 
                    onClick={()=>this.props.routeChange( 'view', element.id)}
                >
                  <img src={element.previewURL} />
                  <div>
                    <div className='tags'>
                          {element.tags.length > 20 
                          ? element.tags.substring(0,20) 
                          : element.tags }
                    </div>
                    <div className='likes' title="Likes">
                        <i className="far fa-thumbs-up"></i>
                        {element.likes}
                    </div>
                    <div className='favorites' title="Favorites">
                    <i className="far fa-star"></i>
                        {element.favorites}
                    </div>
                  </div>
              </Card>
          );
      });
  
    return (
        <div>
            <Title routeChange={this.props.routeChange}/>
            <Form request={this.props.request} />
            <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {childElements}
            </Masonry>
        </div>
        
        );
  }

}
export default Result;