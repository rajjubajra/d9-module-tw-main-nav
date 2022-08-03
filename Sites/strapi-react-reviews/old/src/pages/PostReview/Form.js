import React,{useState} from 'react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import {useSelector} from 'react-redux';

function Form(){

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState('');
  const [response, setResponse] = useState('');
  const [resError, setResError] = useState('');


  console.log(title, category)
  console.log(response, resError);

  const {jwttoken} = useSelector(state => state.login_user);
  console.log(jwttoken);

  /** FETCH CATEGORY */
  const {data, loading, error} = useFetch('http://localhost:1337/api/categories');


    const postdata = {"data": {
      "title": title,
      "body": body,
      "categories": category,
      "rating": rating
    }}


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
        <select>
          <option>-select-</option>
          {
            data.map(item => 
            <option value={() => setCategory([item.id, item.attributes.categories])}>
            {item.attributes.categories}
            </option>)
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