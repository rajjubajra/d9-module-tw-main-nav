import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Form from './Form';


const Hm = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100vh;
   

`;

const Home = (props) => (
  <Hm>
    <Title routeChange={props.routeChange} />
    <Form 
        request={props.request} 
        emptySearch={props.emptySearch} 
        image_type={props.image_type}
        query={props.query}
    />
    <h1>Image Search Home page</h1>
  </Hm>
)
export default Home;