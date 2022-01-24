import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    
    .row{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }  

      input.search{
        width: 240px;
        border: 0px;
        border-bottom: 1px solid #ccc;
        margin: 20px;
        font-size: 1.0rem;
        letter-spacing: 2px;
        padding: 5px 5px;
      }

      select{
        font-size: 0.80rem;
        color: #9c9898;
        border: 0px;
        background: white;
        border-bottom: 1px solid #ccc;
        border-radius: 0px;
        margin: 0px 10px;
      }

      .row > div > label{
        font-size: 0.80rem;
        font-family: sans-serif;
        color: #888;
      }

      > div > input[type='checkbox']{
        font-size: 01rem;
        margin: 0px 15px 0px 0px;
      }
    

`;


const SearchFrom = (props) => (
    <Form>
      <div className='row'>
          <input 
            className='search' 
            type='text' 
            name='searchItem' 
            onChange={props.onTextChange}  
            placeholder='Pixabay Image Search....'
          />
      </div>
      <div className='row'>
           <div>
                <select name="image_type" onChange={props.onTextChange}>
                <option value='all'>All</option>
                  <option value='photo'>Photo</option>
                  <option value='vector'>Vector</option>
                  <option value='illustration'>Illustration</option>
                </select>
            </div>
            <div>
              <select name='colors' onChange={props.onTextChange}>
                  <option>--Select Colour --</option>
                  <option value='grayscale'>Black and White</option>
                  <option value='transparent'>Transparent</option>
                  <option value='red'>Red</option>
                  <option value='green'>Green</option>
                  <option value='blue'>Blue</option>
                  <option value='yellow'>Yellow</option>
                  <option value='white'>White</option>
                  <option value='pink'>Pink</option>
              </select>
            </div>
            {/* <div>
                <label>Grayscale</label> <input type='checkbox' name='colors' onChange={props.onChecked} value='grayscale'/>
                <label>Red</label>       <input type='checkbox' name='colors' onChange={props.onChecked} value='red'/>
                <label>Green</label>     <input type='checkbox' name='colors' onChange={props.onChecked} value='green'/>
            </div>  */}
            <div>
                  <select name="orientation" onChange={props.onTextChange}>
                    <option value='all'>All</option>
                    <option value='vertical'>Verticle</option>
                    <option value='horizontal'>Horizontal</option>
                  </select>
            </div>  
            <div>
                <select name='order' onChange={props.onTextChange}>
                  <option value='papular'>Popular</option>
                  <option value='latest'>Latest</option>
                </select>
            </div>
            <div>
                <select name='per_page' onChange={props.onTextChange}>
                  <option value='30'>30</option>
                  <option value='60'>60</option>
                  <option value='99'>99</option>
                  <option value='200'>200</option>
                </select>
            </div>
      </div>      
    </Form>
)
export default SearchFrom;