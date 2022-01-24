import React from 'react';
import styled from 'styled-components';
import Search from './Search';

const Home = styled.div`

`;

class Home extends React.Component{


  render(){
    return(
      <Home>
        <div className='header'>
          <div className='left'></div>
          <div className='right'><Search /></div>
        </div>

      </Home>
    )
  }
}