

export const postcode = (id, inc) => {
  //console.log(id, inc);
  const index = inc.findIndex(item => item.id === id);
  return index > 1 && inc[index]?.attributes?.name
}