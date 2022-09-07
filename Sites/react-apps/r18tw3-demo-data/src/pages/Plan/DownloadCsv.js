import {CSVLink} from 'react-csv';


function DownloadCsv({data}) {

  

  console.log(data);
  const headers = [
    {label: "RAG", key: "data_rag"},
    {label: "Data Type", key: "data_type"},
    {label: "Fiscal Year", key: "fiscal_year"},
    {label: "Id", key: "id"},
    {label: "Date", key: "mildstone_date"},
    {label: "Update", key: "mildstone_update"}, 
    {label: "Objective", key: "objective"}
  ]

  
  
  return (
    <div>
      <div className="p-2 border border-gray-200 w-36 text-center text-xs uppercase">
      <CSVLink data={data} headers={headers}>Download CSV</CSVLink>
      </div>
    </div>
  )
}

export default DownloadCsv