

export const expenses = (arr,included) => {
  //console.log(arr.data, included);
  const newArr = [];

  if(arr.data.length > 0 && included.length > 0 ){
      included.map(item => {
        let exps = arr.data.some(exp => exp.id === item.id );
        return exps && newArr.push({
          "id": item.id,
          "date": item.attributes.field_date,
          "amount":item.attributes.field_amount,
        })  
      })

  }

  return newArr;

}
