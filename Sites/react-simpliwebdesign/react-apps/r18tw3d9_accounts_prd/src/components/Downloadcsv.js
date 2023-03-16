import React from 'react'
import {CSVLink} from 'react-csv';

function Downlaodcsv({data}) {

  return (
    <div className="px-4 py-1 bg-gray-300 w-40 m-2 text-center">
    <CSVLink data={data}>
    Download CSV
    </CSVLink>
    </div>
  )
}

export default Downlaodcsv