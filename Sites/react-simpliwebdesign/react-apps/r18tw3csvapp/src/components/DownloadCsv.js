import {CSVLink} from 'react-csv';


function DownloadCsv({data}) {

  return (
    <div>
      <div className="p-2 ml-1 border bg-gray-700 text-gray-50 border-gray-200 w-36 text-center text-xs uppercase">
      <CSVLink data={data} >Download CSV</CSVLink>
      </div>
    </div>
  )
}

export default DownloadCsv