import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Logo from './Logo';
import Result from './Result';
import SearchForm from './SearchForm';
import Details from './Details';

const Page = styled.div`
   margin-bottom: 100px;

   > div.header{
     width: 100%;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;

     > div.search{ 
       width: 80%;
       display: flex;
       justify-content: center;

     }
   }
`;


class Search extends React.Component{
  state = {
    searchItem: '',
    amount: 50,
    image_type: 'photo',
    colors: '', //Filter images by color properties, comma separated list of values 
    orientation: 'all',
    order: 'popular',
    per_page: 30,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '6340485-cbcfeb247f45f626113c4d611',
    imgArr: [],
    route: 'home',
    /** IMAGE DETAIL PAGE */
    largeImageURL: '',
    likes: 0,
    downloads: 0,
    favorites: 0,
    user: '',
    tags: ''

  }

  onChecked = (event) =>
  {
    console.log('Checked',event.target.value);
    const color = this.state.color;
    const {name, value, checked } = event.target;
    let newColor = this.state.colors.slice();

    if(name === 'colors' && checked ){
        !newColor.includes(value) && newColor.push(value);
        this.setState({colors: newColor});
        
    }else{
        this.setState({colors: this.state.colors.filter(
            function(colors) { 
            return colors !== event.target.value 
            }
        )
      });
    }
  }

  onTextChange = (event) => {
    const { name, type, value } = event.target;
    const searchText = value; 
    this.setState({[name]: searchText } ,
    () => {
      if(searchText === ''){
        this.setState({imgArr: [] });
      }else{
        axios
        .get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchItem}&image_type=${this.state.image_type}&safesearch=true&orientation=${this.state.orientation}&colors=${this.state.colors}&order=${this.state.order}&per_page=${this.state.per_page}`)
        .then(response => this.setState({imgArr: response.data.hits}))
        .catch(err => console.log(err));
      }
    });

    
  };


  navPage = (nav, largeImageURL, likes, downloads, favorites, user, tags ) => {
    this.setState({route: nav});
    this.setState({largeImageURL});
    this.setState({likes});
    this.setState({downloads});
    this.setState({favorites});
    this.setState({user});
    this.setState({tags})
    console.log('NAV TO NEW PAGE', nav, this.state.likes);  
  }


  /** PAGE NAVIGATION */
  route = (page) => {

    switch(page){

      case 'detail':
      return <Details 
                navPage={this.navPage}
                largeImageURL={this.state.largeImageURL} 
                likes={this.state.likes}
                downloads={this.state.downloads}
                favorites={this.state.favorites}
                user={this.state.user}
                tags={this.state.tags}              
            />
      break;

      default:
      return(
        <Page>
          <div className='header'> 
                <div className='logo'><Logo /></div>
                <div className='search'>
                    <SearchForm onTextChange={this.onTextChange} onChecked={this.onChecked} />
                </div>
            </div>
            <div className='result'>
              <Result 
                imgArr={this.state.imgArr}  
                apiKey={this.state.apiKey} 
                apiUrl={this.state.apiUrl}
                navPage={this.navPage}            
              />
            </div>
        </Page>);
        break;
    }
   
    
  }



  /** RENDER*************************** */
  render(){
    console.log("Image Array", this.state.colors);
    const page = this.state.route;
    return (
      <div>
        {this.route(this.state.route)}
      </div>
    )
   
     

  }

}
export default Search;



