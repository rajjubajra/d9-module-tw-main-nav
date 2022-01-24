import React from 'react';
import styled from 'styled-components';


class SearchType extends React.Component{


  render(props){
    return(
      <div>
        <ul>
          <li>
            Popular
            <ul>
              <li onClick={()=>this.props.order('latest')}>Latest</li>
              <li onClick={()=>this.props.order('popular')}>Popular</li>
            </ul>
          </li>
          <li>
            Photos
            <ul>
              <li onClick={()=>this.props.imageType('photo')}>Images</li>
              <li onClick={()=> {this.props.imageType('vector'); this.props.request() }} >Vector</li>
              <li onClick={()=>this.props.imageType('illustration')}>Illustrations</li>
            </ul>
          </li>
          <li>
            Orientation
            <ul>
              <li onClick={()=>this.props.orientation('all')}>Any orientation</li>
              <li onClick={()=>this.props.orientation('vertical')}>Verticle</li>
              <li onClick={()=>this.props.orientation('horizontal')}>Horizontal</li>
            </ul>
          </li>
          <li onClick={()=>this.props.clearFilter()}>Clear Filter</li>
        </ul>
      </div>
    )
  }
}
export default SearchType;

