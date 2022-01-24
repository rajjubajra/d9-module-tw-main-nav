import BookForm from "./components/BookForm";
import {useState, useEffect} from 'react';


function App() {


  const url = 'https://sunya.me/d9-sunya/booklist?_format=json';

  useEffect(()=>{
    fetch(url,{
      header:{
        'Content-Type' : 'Application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data));
  },[])

  return (
    <div className="container m-auto">
      <div className="p-10">
        <BookForm />
      </div>
     
    </div>
  );
}

export default App;
