import React from 'react';
import {Link} from 'react-router-dom';

function BtnClose() {
  return (
    <div className="w-full flex justify-center">
        <Link to="/" className="px-3 py-1 mt-5 text-center text-xs uppercase font-light hover:bg-gray-50">Close</Link>
    </div>
  )
}

export default BtnClose