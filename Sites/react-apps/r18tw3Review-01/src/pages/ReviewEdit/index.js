import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from 'axios';

/** components */
import LoginBtn from '../../components/LoginBtn';
import SiteHeader from '../../components/SiteHeader';
import useFetch from '../../hooks/useFetch';

/** pages */
import ReviewForm from '../../components/ReviewForm';





function ReviewEdit() {

  const {id} = useParams();

  /** Form input values */
  const [title, setTitle] = useState(''); 
  const [rating, setRating] = useState('');
  const [body, setBody] = useState('');

  /** axios responses on PUT */
  const [response, setResponse] = useState('');
  const [resError, setResError] = useState('');

  /** axios response on GET */
  const [getReview, setGetReview] = useState('');
  const [getReviewError, setGetReviewError] = useState('');


  console.log(title)
  console.log(response, resError);
  console.log(getReview, getReviewError);


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
  const editData = {"data": {
    "title": title,
    "body": body,
    "categories": value,
    "rating": rating
  }}
    
  
  /** JWT TOKEN for review Post Authorization */
  const {jwttoken} = useSelector(state => state.login_user);
  console.log(jwttoken);


  

  useEffect(()=>{

    const fetchReview = async () => {
      await axios({
        method: 'GET',
        url: `http://localhost:1337/api/reviews/${id}?populate=categories`,
        headers: {
          Authorization: `Bearer ${jwttoken}`
        },
      }).then(res => {
        setGetReview(res)
        setTitle(res.data.data.attributes.title)
        setBody(res.data.data.attributes.body)
        setRating(res.data.data.attributes.rating)
        setValue(res.data.data.attributes.categories.data)
      })
      .catch(err => setGetReviewError(err))
    }
    
    fetchReview()

  },[id])

  if(loading) return <div>Loading...</div>;
  if(error) return <div>Error: </div>;

  //console.log(data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit post",e);

    const postReview = async () => {
          await axios({
          method: 'PUT',
          url: `http://localhost:1337/api/reviews/${id}`,
          headers: {
            Authorization: `Bearer ${jwttoken}`
          },
          data: editData
        }).then(res => setResponse(res))
        .catch(err => setResError(err))
    }  
    postReview();
  }

              


  return (
    <div>
      <div>
        <div className="flex align-right">
          <LoginBtn />
        </div>
          <SiteHeader />
        </div>
        <form onSubmit={handleSubmit}>
        <h2>Edit Review</h2>
        <ReviewForm 
          title={title}
          setTitle={setTitle}
          loading={loading}
          data={data}
          value={value} 
          removeItem={removeItem}
          handleChange={handleChange}
          rating={rating}
          setRating={setRating}
          body={body}
          setBody={setBody}
        />
        <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default ReviewEdit
