import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';


function ReviewEditBtn({id}) {

  const {status} = useSelector(state => state.login_user);
  console.log("Login status",status);

  return (
    <div className="flex align-right">
    { status &&
      <small>
        <Link to={`/edit-review/${id}`}>Edit</Link>
      </small>
    }    
    </div>
  )
}

export default ReviewEditBtn