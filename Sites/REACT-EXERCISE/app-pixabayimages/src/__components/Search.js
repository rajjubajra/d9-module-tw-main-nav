import React, { Component } from 'react';
import SearchType from './SearchType.js';
import Result from './Result';
import Home from './Home';
import ViewOne from './Viewone';
import Footer from './Footer';

const API_KEY = '6340485-cbcfeb247f45f626113c4d611';
const api_url = '`https://pixabay.com/api/?key=';
/* 
`https://pixabay.com/api/?key=6340485-cbcfeb247f45f626113c4d611&q=yellow+flowers&image_type=photo`;
*/


class Search extends Component {
      state = {
        data: [],
        route: 'home',
        imgId: '',
        isLoading: false,
        emptySearch: false,
        not_found: false,
        /** SEARCH FILTER STATES */
        query: '',
        image_type: 'all',// Accepted values: "all", "photo", "illustration", "vector"
        orientation: 'all', //Accepted values: "all", "horizontal", "vertical" 
        category: 'all', //Accepted values: fashion, nature, backgrounds, science, education, people, feelings, religion, health, places, animals, industry, food, computer, sports, transportation, travel, buildings, business, music
        min_width: 0,
        min_height: 0,
        editors_choice: false, //Accepted values: "true", "false" 
        safesearch: false, //Accepted values: "true", "false" 
        order: 'popular', //Accepted values: "popular", "latest" 
        per_page: 50, //Determine the number of results per page.Accepted values: 3 - 200 
        page: 1 //Returned search results are paginated. Use this parameter to select the page number. 

      }
/** SEARCH FILTER   *********************************************** */
      imageType = (type) => {
        console.log('Image type clicked', type);
        this.setState({image_type: type});
      }
      orientation = (ornt) => {
        console.log('orientation ', ornt);
        this.setState({orientation: ornt});
      }
      category = (cat) => {
        console.log('category clicked', cat);
        this.setState({category: cat});
      }
      safesearch = (safe) => {
        console.log('safesearch clicked', safe);
        this.setState({safesearch: safe})
      }
      order = (ord) => {
        console.log('order clicked', ord);
        this.setState({order: ord});
      }
      per_page = (ppg) => {
        console.log( 'per page clicked', ppg);
        this.setState({per_page: ppg})
      }
      clearFilter = () =>{
        this.setState({imageType: 'all'});
        this.setState({orientation: 'all'});
        this.setState({category: 'all'});
        this.setState({safesearch: false});
        this.setState({order: 'popular'})
      }
      query = (event) => {
        console.log('query clicked ');
        event.preventDefault();
        let query = event.target.elements.search.value;
        this.setState({query: query});
        console.log('query value', this.state.query);
      }

/** API REQUEST ******************************************************* */      
      request = async () => {
        
        /** change route to result */
        this.setState({route: 'result'});
       
        if(this.state.query === ''){
          this.setState({emptySearch: true});
          this.setState({isLoading: false});
          this.setState({not_found: false});
        }else{
                  /** display loading */
                  this.setState({isLoading: true});
                  this.setState({emptySearch: false});
                  this.setState({not_found: false});

                  /** Api call */
                  const response = await fetch(`https://pixabay.com/api/?key=6340485-cbcfeb247f45f626113c4d611&q=${this.state.query}&image_type=${this.state.image_type}&orientation=${this.state.orientation}&category=${this.state.category}&safesearch=${this.state.safesearch}&order=${this.state.order}&per_page=${this.state.per_page}`);

                  /** change to json data */
                  const data = await response.json();

                  console.log('REQUEST', data);
                  /** Populate the data state with api call  */
                  this.setState({data: data.hits});

                  /** SET DATA NOT FOUND MESSAGE TO TRUE */
                  if(this.state.data.length === 0){
                    this.setState({not_found: true})
                    this.setState({emptySearch: false});
                    this.setState({isLoading: false});
                  }

                  /** SET THE DATA LOADING MESSAGE TO FALSE */
                  this.setState({isLoading: false});
                  return;         
        }
      }

/** ROUTE CHANGE ****************************************************** */      
      routeChange = (route, imgId) => {
          this.setState({route: route}); //route state change to view
          this.setState({imgId: imgId});
          console.log('route change clicked', imgId, route);
      }

/** NAVIGATE TO DIFFERENT COMPONENT(PAGE) ***************************** */
      PageRoute = (router) => {

        switch(router){

          case 'home':
          return (
            <div>
              <SearchType 
                    imageType={this.imageType}
                    orientation={this.orientation}
                    category={this.category}
                    safesearch={this.safesearch}
                    order={this.order}
                    clearFilter={this.clearFilter}
                    request={this.request}
              />
              <Home  
                    request={this.request} 
                    routeChange={this.routeChange}
                    emptySearch={this.state.emptySearch}
                    image_type={this.state.image_type}
                    query={this.query}
              />
            </div>
          )
          break;

          case 'result':
          return (
            <div>
              <SearchType 
                    imageType={this.imageType}
                    orientation={this.orientation}
                    category={this.category}
                    safesearch={this.safesearch}
                    order={this.order}
                    clearFilter={this.clearFilter}
                    request={this.request}
              />
              <Result 
                    data={this.state.data} 
                    routeChange={this.routeChange} 
                    request={this.request}
                    not_found={this.state.not_found}
                    emptySearch={this.state.emptySearch}
                    image_type={this.state.image_type}
                    isLoading={this.state.isLoading}
                    query={this.query}
                    />
            </div>
          
          )
          break;


          case 'view':
          return <ViewOne routeChange={this.routeChange} />
          break;

        }

      }

      componentDidUpdate(){
        console.log('did update')
      }

/** RENDER ************************************************************ */      
      render(){
        console.log('RENDER');
        console.log('FILTER QUERY', this.state.query);
        console.log('FILTER IMAGE TYPE', this.state.image_type);
        console.log('FILTER CATEGORY', this.state.category);
        console.log('FILTER ORIENTATION', this.state.orientation);
        console.log('FILTER SAFESEARCH', this.state.safesearch);
        console.log('FILTER ORDER', this.state.order);


        console.log('Data not found 2', this.state.not_found, 'Data array 2 ', this.state.data);
        console.log('STEP THREE PIXADATA ', this.state.data);
        return(
          <div>
           {this.PageRoute(this.state.route)}
           <Footer route={this.state.route} />
          </div>
        )
      }

}
export default Search;
