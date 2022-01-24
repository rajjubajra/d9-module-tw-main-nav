import React from 'react';
import styled from 'styled-components';


const Frm = styled.div`
    box-sizing: border-box;

    .errmsg{
      color: red;
      text-align: center;
    }

    > form > div{
      display: flex;
      width: 100%
      justify-content: center;
      margin-bottom: 50px;
    }

    > form.example > div > input[type=text] {
      padding: 10px;
      font-size: 17px;
      border: 0px solid grey;
      float: left;
      width: 35%;
      min-width: 200px;
      border-bottom: 1px solid #ccc;
    }

    > form.example > div > button {
      float: left;
      width: 100px;
      padding: 10px;
      background: #0b1f90;;
      color: white;
      font-size: 17px;
      border: 1px solid grey;
      border-left: none;
      cursor: pointer;
    }
    
    > form.example > div > button:hover {
      background: #0b7dda;
    }
    
    > form.example::after {
      content: "";
      clear: both;
      display: table;
    }

`;

class Form extends React.Component{

  render(props){
    return(
      <Frm onSubmit={this.props.query}>
          <form className="example" >
            <div>
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit"><i className="fa fa-search"></i></button>
              {/* <button type="submit" name='vector'><i className="fa fa-search"></i>Vector</button>
              <button type="submit" name='illustration'><i className="fa fa-search"></i>Illustration</button> */}
            </div>
          </form>
      </Frm>
    )
  }
}
export default Form;