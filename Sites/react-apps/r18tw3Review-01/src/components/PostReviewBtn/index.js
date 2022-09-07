import React from 'react'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function PostReviewBtn() {

  /** login Status */
  const {status} = useSelector(state => state.login_user);

  return (
    <small className="m-5">
        {
          status ? <Link to="/post-review"><small>Post Review</small></Link> : ''
        }
    </small>
  )
}

export default PostReviewBtn
