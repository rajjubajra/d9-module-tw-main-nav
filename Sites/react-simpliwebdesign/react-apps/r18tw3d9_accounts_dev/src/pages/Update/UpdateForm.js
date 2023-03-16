import React,{useState,useEffect} from 'react'

function UpdateForm({
  invDate,
  invNo,
  clientArr,
  invoiceArr,
  bankArr
}) {
  

  /** form states */
  const [title, setTitle] = useState('');
  const [invoice, setInvoice] = useState('');
  const [date, setDate] = useState('');
  const [clientId, setClientId] = useState('');
  const [clientName,setClientName] = useState('');
  const [description, setDescription] = useState('');
  const [qty, setQty] = useState('');
  const [rate, setRate] = useState('');
  const [bank, setBank] = useState('');

  console.log(clientId, clientName);

  useEffect(()=>{

    setInvoice(invNo);
    setDate(invDate);

  },[invDate, invNo])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit ", e)
  }

  const inputStyle = "border border-gray-200 p-2 m-2 ouline-none placeholder:text-sm placeholder:font-light"


  return (
    <form className="border border-gray-200 p-5 m-5 w-96">
      <div>Update Form:</div>
      {/** title */}
      <div>
          <input 
          className={inputStyle}
          type="text" 
          name="title" 
          onChange={(e)=> setTitle(e.target.value)}  
          value={title}
          placeholder="Title"
          />
      </div>
      {/** Invoice Number */}
      <div>
          <input 
          className={inputStyle}
          rows="20"
          type="text" 
          name="invoice" 
          onChange={(e)=> setInvoice(e.target.value)}  
          value={invoice}
          placeholder="Invoice No"
          />
      </div>
      {/** Invoice Date */}
      <div>
          <input 
          className={inputStyle}
          type="text" 
          name="date" 
          onChange={(e)=> setDate(e.target.value)}  
          value={date}
          placeholder="Date"
          />
      </div>
      {/** Client Id */}
      {
        <div className="mt-5">
          { clientArr[0].client_details.length > 0 &&
            <div>
              <div>{clientArr[0].client_details[0].client_name}</div> 
              <div>{clientArr[0].client_details[0].client_email[0]}</div>
              <div>{clientArr[0].client_details[0].client_tel[0]}</div> 
            </div> 
          } 
        </div>
      }
      <div>
      { clientArr[0].client_details.length > 0 &&
      <>
          <div>
          <input 
            className={inputStyle}
            type="text" 
            name="clientId" 
            onChange={(e)=> setClientId(e.target.value)}  
            value={clientArr[0].client_details[0].clientId}
            placeholder="Client Identity"
          />
          </div>
          <div>
          <input 
            className={inputStyle}
            type="text" 
            name="clientId" 
            onChange={(e)=> setClientName(e.target.value)}  
            value={clientArr[0].client_details[0].client_name}
            placeholder="Client Identity"
          />
          </div>
      </>
      }
      </div>

      {/** Invoice Details */}
      <div>
          <textarea
          className={inputStyle}
          type="textarea" 
          name="description" 
          onChange={(e)=> setDescription(e.target.value)}  
          value={description}
          placeholder="Description"
          />
      </div>

      <div>
          <input 
          className={inputStyle}
          type="number" 
          name="qty" 
          onChange={(e)=> setQty(e.target.value)}  
          value={qty}
          placeholder="Quantity"
          />
      </div>
      <div>
          <input 
          className={inputStyle}
          type="number" 
          name="rate" 
          onChange={(e)=> setRate(e.target.value)}  
          value={rate}
          placeholder="Rate"
          />
      </div>

      {/** Bank Detail */}
      <div>
          <textarea
          className={inputStyle}
          type="textarea" 
          name="bank" 
          onChange={(e)=> setBank(e.target.value)}  
          value={bank}
          placeholder="Bank Account Info"
          />
      </div>
      <div>
        <button type="submit" class="border border-gray-200 p-2 m-2">Submit</button>
      </div>
    </form>
  )
}

export default UpdateForm