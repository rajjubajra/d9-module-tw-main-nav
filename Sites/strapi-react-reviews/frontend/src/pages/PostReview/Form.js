import React,{useState} from 'react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import {useSelector} from 'react-redux';



function Form(){

  /** Form input Values */
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState('');


  /** axios responses */
  const [response, setResponse] = useState('');
  const [resError, setResError] = useState('');

  console.log(title)
  console.log(response, resError);


  /** FETCH CATEGORY for Form Select Options */
  const {data, loading, error} = useFetch('http://localhost:1337/api/categories');

  /** Push multiple options */
  const [value, setValue] = useState([]);
  console.log(value)
  const handleChange = (e) => {
    console.log("???",e);
    let item = {"id": e}    
    /** check if the item  is alread selected */
    const exits = value.some((el) => el.id === e);
    !exits &&
    /** add multiple selected item in to the array */
    setValue(current => [...current, item])
  }

  /** remove Object from the selection options (value array) */
  const removeItem = (item) => {
    console.log(item);
    let arr = value.filter( element => element.id !== item)
    setValue(arr);
  }


  /** Review Ready to Post Data */
  const postdata = {"data": {
    "title": title,
    "body": body,
    "categories": value,
    "rating": rating
  }}
    
  
  /** JWT TOKEN for review Post Authorization */
  const {jwttoken} = useSelector(state => state.login_user);
  console.log(jwttoken);


  if(loading) return <div>Loading...</div>;
  if(error) return <div>Error: </div>;

  //console.log(data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit post",e);

    const postReview = async () => {
          await axios({
          method: 'POST',
          url: 'http://localhost:1337/api/reviews',
          headers: {
            Authorization: `Bearer ${jwttoken}`
          },
          data: postdata
        }).then(res => setResponse(res))
        .catch(err => setResError(err))
    }
  
    postReview();
  }

  

  

  return (
    <form onSubmit={handleSubmit}>

      <h3>Review Post</h3>
      <input
        required
        type="text"
        name="title" 
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
      />
      <div className="flex">
      {/** display selected items */
        !loading && data.map(item => {
          return value && value.map(val => {
            return parseInt(item.id) === parseInt(val.id) 
            && <small className="m-5" key={val.id} onClick={()=> removeItem(val.id)}>
               <small className="sm-btn">x</small> {item.attributes.categories}
            </small>
          })
        })
      }
      </div>
      <select onChange={(e) => handleChange(e.target.value)}>
        <option>- Select -</option>
        {
          !loading && data.map(item => {
            return <option value={item.id}>{item.attributes.categories}</option>
          })
        }
      </select>
      <input 
      required
      type="number" 
      max="10" 
      min="1"
      value={rating}
      onChange={(e) => setRating(e.target.value)} />
      <textarea 
        required
        name="body" 
        value={body}
        onChange={(e)=> setBody(e.target.value)}
      />
      <button className="btn">Submit</button>
    </form>
  )
}

export default Form