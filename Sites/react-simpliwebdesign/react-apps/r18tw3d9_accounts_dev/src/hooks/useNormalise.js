import {useEffect, useState} from 'react';


function useNormalise(data,client,bank){

  console.log(data, client, bank);

  /** Normalized data */
  const [loading, setLoading] = useState(false);
  const [dataArr, setDataArr] = useState([]);

  console.log(dataArr);

  /** Total Amount of a trasaction */
  const getTotalAmount = (qty, amt) => {
    /** set qty to 1 if qty is null value */
    let quantity = qty === null || '' ? 1 : qty;
    return quantity * amt;
  }

  /** Invoice Detail Array */
  const invoiceDetailArr = (arr) => {
      //console.log("Invoice detail array : ",arr);
      let newArr = [];
      //console.log("New Arr", newArr);
      data.included.map((item)=> {
        return arr.some((ar)=> ar.id === item.id) &&
        newArr.push({
            "id" : item.id,
            "item" : item.attributes.field_description.value,
            "quantity": item.attributes.field_quantity,
            "rate": item.attributes.field_rate,
            "amount": getTotalAmount(item.attributes.field_quantity,item.attributes.field_rate)
          })
      });
      return newArr;
  }
  
  /** Client Details */
  const clientDetailData = (clientId) => {
    //console.log(clientId);
    let index = client?.data?.findIndex((item)=> item.relationships.field_client_id.data.id === clientId);
    let arr = [];
    const {
      title,
      field_client_s_name,
      field_client_s_address_line_1,
      field_client_s_address_line_2,
      field_client_s_tel,
      field_client_s_email,
      field_client_s_contact_person
    } = client?.data[index].attributes;
    arr.push({
      "client_id": clientId,
      "client_title" : title,
      "client_name" : field_client_s_name,
      "client_add_line_1": field_client_s_address_line_1,
      "client_add_line_2": field_client_s_address_line_2,
      "client_tel" : field_client_s_tel,
      "client_email": field_client_s_email,
      "client_contact_person": field_client_s_contact_person
  })
  return arr;
}

  /** Bank Details */
  const myBankAccount = (id) => {
    //console.log(id);
    //console.log(bank.data[0].relationships.field_bank_account_id_invoice.data.id);
    const arr = [];
    const checked = bank?.data?.some((item)=> item.relationships.field_bank_account_id_invoice.data.id === id);
    //console.log(checked);
    checked &&
    bank?.data?.map(item => {
      const {title,field_bank_account_details} = item.attributes;
      return arr.push({
        "bankId" : id,
        "bank" : title,
        "bank_detail": field_bank_account_details
      })
    })
    return arr;
  }

  
  useEffect(()=>{

    const normalizeData =  (data) => {
      //console.log(data.data.length)
      let arr = [];
      console.log("All In One : ",arr);
      data?.data?.map((item) => {
        const {
          field_old_invoice_date,
          field_old_invoice_number,
        } = item.attributes;
        const {
          field_invoice_details,
          field_client_id_invoice,
          field_bank_account
        } = item.relationships;
  
        return arr.push({
          "id": item.id,
          "date": field_old_invoice_date,
          "invoice_no": field_old_invoice_number,
          "client_details": clientDetailData(field_client_id_invoice.data.id),
          "invoice_details": invoiceDetailArr(field_invoice_details.data),
          "bank_details": myBankAccount(field_bank_account.data.id)
        })
      })
      setDataArr(arr);
      setLoading(false)
    }
  

    normalizeData(data);
  },[data])

  return {dataArr, loading}

}

export default useNormalise;

