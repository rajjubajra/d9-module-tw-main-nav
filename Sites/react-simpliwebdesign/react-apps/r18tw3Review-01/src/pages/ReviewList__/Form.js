import React from 'react'

function Form({title, setTitle, 
              loading, data, value, removeItem,
              handleChange, rating, setRating,
              body, setBody }) {
  return (
    <>
    <input
        required
        type="text"
        name="title" 
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
      />
      <div className="flex">
      {/** display selected items */
        !loading && data.map(item => {
          return value && value.map(val => {
            return parseInt(item.id) === parseInt(val.id) 
            && <small className="m-5" key={val.id} onClick={()=> removeItem(val.id)}>
                <small className="sm-btn">x</small> {item.attributes.categories}
            </small>
          })
        })
      }
      </div>
      <select onChange={(e) => handleChange(e.target.value)}>
        <option>- Select -</option>
        {
          !loading && data.map(item => {
            return <option value={item.id}>{item.attributes.categories}</option>
          })
        }
      </select>
      <input 
      required
      type="number" 
      max="10" 
      min="1"
      value={rating}
      onChange={(e) => setRating(e.target.value)} />
      <textarea 
        required
        name="body" 
        value={body}
        onChange={(e)=> setBody(e.target.value)}
      />
      
    </>
  )
}

export default Form
