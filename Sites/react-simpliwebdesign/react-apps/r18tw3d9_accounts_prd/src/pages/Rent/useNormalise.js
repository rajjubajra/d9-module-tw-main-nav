import {useState, useEffect} from 'react';
import {expenses} from './normalise/expenses';
import {totalexpenses} from './normalise/totalexpenses';
import {handleIncluded} from './normalise/handleInclude';
import {handledateformate} from './normalise/handledateformate';


/** RENT Normalised */
function useNormalise(jsondata){

  //console.log(jsondata);
  
  /** Normalised data */
  const [data, setData] = useState([]);
  
  useEffect(()=>{

    /** Normalised in to a new array "arr" */
      const arr = [];
      jsondata && jsondata?.data?.length > 0 
      && jsondata?.data?.map(item => {
          
        const {
          title, 
          field_date_on_bank_statement,
          field_rent_amount,
          field_rent_period} = item.attributes; 
      
        const expArr = item.relationships.field_house_rent_expenses;

        return arr.push({ 
          "id" : item.id,
          "title": title,
          "deposited_on" : field_date_on_bank_statement,
          "amount": field_rent_amount,
          "rent_period": `${handledateformate(field_rent_period.value)}  to 
          ${handledateformate(field_rent_period.end_value)}`,
          "source": handleIncluded(item.relationships.field_house.data.id, jsondata),
          "expenses": expenses(expArr, jsondata.included),
          "total_expenses": totalexpenses(expArr, jsondata.included)
        })
      })

      setData(arr)
      

  },[jsondata])


  /** return
   *  data : normalized data from jsondata 
   */
  return {data}

}

export default useNormalise;