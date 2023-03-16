import {Form} from 'react-router-dom'

function NewPostForm() {


  return (
    <Form method="post" action="/article/new">
    <div>Article: </div>
      <h2 className="form-title">Post Article</h2>
      <div className='grid grid-flow-row'>
        <label htmlFor="title">Title:</label>
        <input 
        className='border border-gray-400 p-1'
        name="title" type="text" />
      </div>
      <div className='grid grid-flow-row mt-2'>
        <label htmlFor="body">Body:</label>
        <textarea 
        className='border border-gray-400 p-1'
        name="body" />
        
      </div>
      <button
        className='form-btn'
        type="submit">Submit</button>
    </Form>

  )
}

export default NewPostForm