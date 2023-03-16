
/** sort "included" of the jsondata */
export const handleIncluded = (id, jsondata) => {
  let index = jsondata && jsondata.included && jsondata?.included?.findIndex(item => item.id === id);
  return jsondata && jsondata.included && jsondata?.included[index]?.attributes?.name; 
}