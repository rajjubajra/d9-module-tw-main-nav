import {getTotalAmount} from './getTotalAmount';

    /** Invoice Detail Array */
    export const invoiceDetailArr = (arr, data) => {
      //console.log("Invoice detail array : ",arr);
      let newArr = [];
      //console.log("New Arr", newArr);
      data && data.included.map((item)=> {
        return arr && arr?.some((ar)=> ar.id === item.id) &&
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
