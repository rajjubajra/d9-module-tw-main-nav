

export const totalexpenses = (arr, included) => {
  //console.log(arr.data, included);
  const Arr = [];
  if(arr.data.length > 0 && included.length > 0 ){
      included.map(item => {
        let exps = arr.data.some(exp => exp.id === item.id );
        return exps && Arr.push(item.attributes.field_amount)  
      })
  }

  return Arr.length > 0 ? Arr.reduce((acc, item) => acc + item) : 0;
  
}