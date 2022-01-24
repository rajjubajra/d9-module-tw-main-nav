import React from 'react';
import styled from 'styled-components';

const Ftr = styled.div`
  width: 100%;
  display: block;
  position: fixed;
  bottom: 0px;
  background-color: #555;

  .logo{
    width: 60px;
    padding: 0px;
    margin: 0px;
    position: relative;
    top: 6px;
  }
  .link{
    text-decoration: none;
    color: #ccc;
  }

  > div{
    text-align: center;
    font-size: 0.9rem;
    color: #ccc;
  }

`;

const Footer = (props) => (
  <Ftr>
    <div>
        <p>Design all right reserved { (new Date().getFullYear())} &copy; 
            <a className='link' href='http://www.yellow-website.com'>Yellow-Website.com</a> | image source: <a href='https://pixabay.com' target='_blank'><img className='logo' src='./images/pixabay.png' alt='pixabay logo' /></a>   |  [Page : {props.route}]</p>
    </div>

  </Ftr>
)
export default Footer;