import React from 'react';
import styled from 'styled-components';

const Logostyle = styled.div`
    width: 100%;
    display:flex;

    img{
      width: 200px;
    }
    span{
      display: block;
      position: relative;
      top: -18px;
      left: 29px;
      font-family: sans-serif;
      font-size: 1.0rem;
      color: #085898;
      letter-spacing: 0.21em;
    }
`;

const Logo = () => (
  <Logostyle>
  <div>
    <img src='./images/logo-h.jpg' alt='yellow-website logo'/>
    <span>Image Search</span>
  </div>  
  
  </Logostyle>
)
export default Logo;