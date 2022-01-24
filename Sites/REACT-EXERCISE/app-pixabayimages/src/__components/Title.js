import React from 'react';
import styled from 'styled-components';

const Ttl = styled.div`
    font-family: sans-serif;
    font-weight: 100;
    text-align: center;
    letter-spacing: 10px;
    color: #91cc18;
    text-shadow: 1px 1px 1px #000000;

    > h1{
      font-family: sans-serif;
      font-weight: 100;
      text-align: center;
      letter-spacing: 10px;
      color: #91cc18;
      text-shadow: 1px 1px 1px #000000;
    }
`;

const Title = (props) => (
  <Ttl>
    <h1 onClick={()=>props.routeChange('home')}>Image Search</h1>
  </Ttl>
)
export default Title;