import {useEffect, useState} from 'react';


function useNormalisePrint(data, included, client,bank){

  /** Normalized data */
  const [loading, setLoading] = useState(false);
  const [dataArr, setDataArr] = useState([]);

  /** Total Amount of a trasaction */
  const getTotalAmount = (qty, amt) => {
    /** set qty to 1 if qty is null value */
    let quantity = qty === null || '' ? 1 : qty;
    return quantity * amt;
  }

  /** Invoice Detail Array */
  const invoiceDetailArr = (arr) => {
    
    let newArr = [];
    
    included?.map((item)=> {
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
    console.log(clientId);
    let index = clientId && client?.data?.findIndex((item)=> item.relationships.field_client_id.data.id === clientId);
    //console.log("Cleint Index : ", index);
    let arr = [];
    console.log(client);
    //console.log(client?.data[index]);
    //console.log(index && client?.data[index].attributes);
    //console.log("CLEINT DETAIL: ",arr);
    index && arr.push({
      "client_id": client?.data[index].id,
      "client_title" : client?.data[index].attributes.title,
      "client_name" : client?.data[index].attributes.field_client_s_name,
      "client_add_line_1": client?.data[index].attributes.field_client_s_address_line_1,
      "client_add_line_2": client?.data[index].attributes.field_client_s_address_line_2,
      "client_tel" : client?.data[index].attributes.field_client_s_tel,
      "client_email": client?.data[index].attributes.field_client_s_email,
      "client_contact_person": client?.data[index].attributes.field_client_s_contact_person
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

  const normalizeData =  (data) => {
    console.log("DATA ? ", data);
    console.log("DATA.attritbues ? ", data?.attributes);
    let arr = [];
    console.log("All In One : ", arr);
    arr.push({
        "id": data?.id,
        "date": data?.attributes?.field_old_invoice_date,
        "invoice_no": data?.attributes?.field_old_invoice_number,
        "client_details": data?.relationships?.field_client_id_invoice.data.id,
        "invoice_details": data?.relationships?.field_invoice_details.data,
        "bank_details": myBankAccount(data?.relationships?.field_bank_account.data.id),
        "invoice_details": invoiceDetailArr(data?.relationships?.field_invoice_details.data),
        "client_details": clientDetailData(data?.relationships?.field_client_id_invoice.data.id)
      })
    setDataArr(arr);
    setLoading(false);
  }

  useEffect(()=>{
    normalizeData(data);
  },[data])

  return {dataArr, loading}

}

export default useNormalisePrint;

