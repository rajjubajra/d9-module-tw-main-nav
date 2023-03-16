import {useState, useEffect} from 'react';


const useTotal = (data) => {

  const [total, setTotal] = useState(0);
  const [totaling, setTotaling] = useState(false);

  console.log("Total",total);

  useEffect(()=>{
    setTotaling(true)
    const arr = [];
    data.length > 0 &&
    data.map(item => {
      return arr.push(item.amount);
    })
    const totalAmount = arr.length > 0 && arr.reduce((acc, cum) => acc + cum);
    setTotal(totalAmount > 0 && totalAmount.toFixed(2));
    setTimeout(()=> {
      setTotaling(false);
    },2000)
    
  },[data])


  return {total, totaling}


}

export default useTotal;