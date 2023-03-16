import {Form } from 'react-router-dom';



/** UPDATE FORM */
function UpdateForm({data}) {


  return (
    <Form method="post" action={`/article/update/${data.id}`}>
      <h2 className="form-title">Update Article</h2>
      <div className='grid grid-flow-row'>
        <label htmlFor="title">Title:</label>
        <input 
        className='border border-gray-400 p-1'
        name="title" 
        type="text" 
        defaultValue={data.attributes.title}  
        />
      </div>
      <div className='grid grid-flow-row mt-2'>
        <label htmlFor="body">Body:</label>
        <textarea 
        className='border border-gray-400 p-1'
        name="body" 
        defaultValue={data.attributes.body.value}
        />
        
      </div>
      <button
        className='form-btn'
        type="submit">Submit</button>
    </Form>

  )
}

export default UpdateForm