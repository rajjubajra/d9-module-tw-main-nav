import React, {useEffect, useState} from 'react';
import {fetchDataSingle} from '../../redux/fetchDataSingleSlice';
import {clientData} from '../../redux/clientDetailSlice';
import {bankData} from '../../redux/bankDetailSlice';
import {useSelector, useDispatch} from 'react-redux';
import useNormalisePrint from '../../hooks/useNormalisePrint';
import UpdateForm from './UpdateForm';


function Remote({id}) {

/** DATA FETCHING */
const dispatch = useDispatch();

console.log("Remote ID UUID ? - ", id);

useEffect(()=>{
  dispatch(fetchDataSingle({id}));
  dispatch(clientData());
  dispatch(bankData());
},[dispatch, id])

const {loading_data, error_data, data, included} = useSelector(state => state.data_single);
const {loading_client, client_error, client} = useSelector(state => state.data_client);
const {loading_bank, bank_error, bank} = useSelector(state => state.data_bank);

console.log(loading_data, error_data, data);
console.log(loading_client, client_error, client);
console.log(loading_bank, bank_error, bank);

const { dataArr, loading } = useNormalisePrint(data, included, client, bank); 
console.log("DATA Array", dataArr, loading);

  /** Total Amount */
  const totalAmount = (arr) => {
      //console.log(arr);
      let total = arr.reduce((acc, cur) => {return acc + cur.amount},0)
      //console.log(total)
      return (total).toFixed(2);
    }

  if(loading && dataArr.length < 1) return <div>Loading...</div>
  return (
    <div>
    <div>UPDATE:</div>
    <UpdateForm 
      invDate={dataArr.length > 0 && dataArr[0].date}
      invNo={dataArr.length > 0 && dataArr[0].invoice_no}
      clientArr = {dataArr.length > 0 && dataArr[0].client_details.length > 0 && dataArr[0].client_details[0].id}
      invoiceArr = {dataArr.length > 0 && dataArr[0].invoice_details.length > 0 && dataArr[0]?.invoice_details}
      bankArr={dataArr.length && dataArr[0].bank_details.length > 0 && dataArr[0]?.bank_details[0]?.bank_detail.value}
    />
    {
      dataArr.length > 0 && 
      <div className="w-fit text-sm border border-gray-200 p-5">
        {/** INVOICE DATE AND NUMBER */}
        <div className="mt-5">
          <div>Date: {dataArr[0].date}</div>
          <div>Invoice No. : {dataArr[0].invoice_no}</div>
        </div>
        {/** CLIENT'S ADDRESS */}
        <div className="mt-5">
          { dataArr[0].client_details.length > 0 &&
            <div>
              <div>{dataArr[0].client_details[0].client_name}</div> 
              <div>{dataArr[0].client_details[0].client_email[0]}</div>
              <div>{dataArr[0].client_details[0].client_tel[0]}</div> 
            </div> 
          } 
        </div>
        {/** INVOICE ITEMS */}
        <div className="mt-5">
            <div className="flex">
              <div className="w-10">SN</div>
              <div className="w-80">Description</div>
              <div className="w-10 text-center">Qty</div>
              <div className="w-20 text-center">Rate</div>
              <div className="w-20 text-center">Amount</div>
            </div>
          { dataArr[0].invoice_details.length > 0 &&
            dataArr[0]?.invoice_details?.map((inv, i)=> {
              return <div className="flex" key={i}>
                  <div className="w-10">{parseInt(i) + 1}</div>
                  <div className="w-80" dangerouslySetInnerHTML={{__html: inv.item}} />
                  <div className="w-10 text-right">{inv.quantity}</div>
                  <div className="w-20 text-right">£ {(inv.rate).toFixed(2)}</div>
                  <div className="w-20 text-right">£ {(inv.amount).toFixed(2)}</div>
              </div>
            })  
          }
        </div>
        {/** Total Amount */}
        <div className="mt-5 flex justify-end gap-3">
          <div>Total Amount: </div>
          <div>£ {totalAmount(dataArr[0]?.invoice_details)}</div>
        </div>
        {/** Bank Account  */}
        <div className="mt-5">
          <div dangerouslySetInnerHTML={{__html: dataArr[0]?.bank_details[0]?.bank_detail.value}} />
        </div>
      </div>
    }
    </div>
  )
}

export default Remote