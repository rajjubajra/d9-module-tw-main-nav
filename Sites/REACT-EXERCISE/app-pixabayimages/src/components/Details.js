import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  width: 98%;
  padding: 2%;
  margin-bottom: 100px;

  h1{
    font-weight: 100;
    font-family: sans-serif;
    text-transform: uppercase;
    font-size: 1.3rem;
    letter-spacing: 2px;
  }

  .imgurl{
    font-size: 0.5rem;
  }

  .close {
    font-weight: 100!important;
    font-size: 2rem;
    margin: 0px 0px;
    cursor: pointer;
    color: #79767685;
    }

  .far{
      font-weight: 400;
      margin: 0px 5px 0px 0px;
    } 
  .fas{
    margin: 0px 5px 0px 0px;
  }   

  ul > li{
    list-style: none;
    line-height: 1.3rem;
  }

 > div.image{
   width: 63%;
   min-width: 400px;
   > img{
     width: 100%;
     border: 1px solid #000;
   }
 }

 > div.detail{
      width: 35%;
      padding: 0 2%;
      font-size: 0.8rem;
      font-family: sans-serif;
      font-weight: 300;
 } 

`;

class Details extends React.Component{

  
  render(props){
    const { navPage, largeImageURL, likes, downloads, favorites, user, tags}=this.props;
    console.log('Image DEtail', favorites );
    return(
      <Page>
        <div className='image'><img src={largeImageURL} alt='' /></div>
        <div className='detail'>
            <div>
                <div>
                  <span onClick={()=>{navPage('home')}}>
                     <i className="far fa-times-circle close" 
                     title="Close Image, back to search">
                     </i>
                  </span>
                  <span style={{float:'right'}}>
                      <img style={{width:'50px'}} src='./images/logo150x150.png' alt='Yellow-Website Logo' />
                  </span>  

                </div>
                <h1>Image Details: </h1>
                <div>Image Url: <span className='imgurl'>{largeImageURL}</span></div>
                <hr />
                <div>User: {user}</div>
                <div>
                  <ul>
                    <li><i className="far fa-thumbs-up"></i>Likes: {likes}</li>
                    <li><i className="fas fa-download"></i>Download: {downloads}</li>
                    <li><i className="far fa-heart"></i>Favorites: {favorites}</li>
                  </ul>
                </div>
                <div>
                  <p>Tages: {tags}</p>
                </div>
            </div>
        </div>
       
      </Page>
    )
  }


}
export default Details;