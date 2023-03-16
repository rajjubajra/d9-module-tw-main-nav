import React from 'react';
import {Link} from 'react-router-dom';

function Error() {
  return (
    <div className="w-content p-20 border border-gray-300 m-5">
      <div>Page Not found</div>
      <Link className="bg-gray-300 w-24 py-6" to="/https://yellow-website.com/yw-account/">Back</Link>
    </div>
  )
}

export default Error
