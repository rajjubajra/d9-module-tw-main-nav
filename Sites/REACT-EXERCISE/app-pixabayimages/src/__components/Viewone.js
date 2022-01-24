import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Form from './Form';


const ViewOne = (props) => (
  <div>
    <Title routeChange={props.routeChange} />
    <h1>View One Image</h1>
  </div>  
)
export default ViewOne;