import {useEffect, useState} from 'react';
import {invoiceDetailArr} from './normalise/invoiceDetailArr';
import {invoiceTotalAmount} from './normalise/invoiceTotalAmount';
import {clientDetailData} from './normalise/clientDetailData';
import {clientName} from './normalise/clientName';
import {myBankAccount} from './normalise/myBankAccount';


function useNormalise(data,client,bank){

  console.log("NORMAILISE : ",data, client, bank);

  /** Normalized data */
  const [dataArr, setDataArr] = useState([]);

  //console.log(dataArr);

  useEffect(()=>{

    const normalizeData =  (data) => {
      //console.log("DATA RAW: ",data.data)
      let arr = [];
      //console.log("All In One : ",arr);
      data?.data?.map((item) => {
        const {
          field_old_invoice_date,
          field_old_invoice_number,
          drupal_internal__nid
        } = item.attributes;
        const {
          field_invoice_details,
          field_client_id_invoice,
          field_bank_account
        } = item.relationships;
  
        return arr.push({
          "id": item.id,
          "nodeId": drupal_internal__nid,
          "date": field_old_invoice_date,
          "invoice_no": field_old_invoice_number,
          "client_name": clientName(field_client_id_invoice?.data.id),
          "client_details": clientDetailData(field_client_id_invoice?.data.id, client),
          "invoice_amount": invoiceTotalAmount(field_invoice_details?.data, data),
          "total_amount": "",
          "invoice_details": invoiceDetailArr(field_invoice_details?.data, data),
          "bank_details": myBankAccount(field_bank_account?.data.id, bank)
        })
      })
      setDataArr(arr);

    }
  
    normalizeData(data);
    
  },[bank, client, data])

  console.log("Normalised",dataArr)
  return {dataArr}

}

export default useNormalise;