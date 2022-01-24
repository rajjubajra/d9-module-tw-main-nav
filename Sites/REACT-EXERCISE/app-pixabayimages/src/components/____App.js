import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Search from './Search';

const Page = styled.div`
width: 100%;
display: flex;

> div.search{
  width: 70%;
  
}

`;

const View = () => (
  <Page>
    <div className='logo'><Navbar /></div>
    <div className='search'><Search /></div>
  </Page>
)
export default View;