


export const viewArray = (items) => {
  console.log(items)
  /** LOOL NOT WORKING ONLY FIRST ARRAY VALUE IS VISIBLE */
  for(let i = 0; i < items.length; i++){
    return <div className="mx-2">{items[i]}</div>
  }
}

