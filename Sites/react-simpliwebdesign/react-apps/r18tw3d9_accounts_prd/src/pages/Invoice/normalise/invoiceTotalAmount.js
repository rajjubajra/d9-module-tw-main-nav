
import {getTotalAmount} from './getTotalAmount';


/** Invoice Amount only */
export const invoiceTotalAmount = (arr, data) => {

  let newArr = [];
  //console.log("Invoice detail array : ",arr);

  data.included.map((item)=> {
  
    let amount = getTotalAmount(item.attributes.field_quantity,item.attributes.field_rate)
    return arr?.some((ar)=> ar.id === item.id) &&
    newArr.push(amount)});

  //console.log("New Arr", newArr);
  return newArr.length > 0 && newArr.reduce((acc, cur) => {return acc + cur},0)
  
}