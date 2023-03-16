import { redirect, useActionData ,useNavigate } from 'react-router-dom';
import NewPostForm from './NewPostForm';
import {post} from '../../../functions/post';





function NewPost() {

  const actionData = useActionData();
  const navigate = useNavigate();

  console.log("acion data: ", actionData);

  function cancelHandler() {
    navigate('/articles');
  }

  return (
    <> 
    {actionData && actionData.status && 
    <p className='text-red-700'>{actionData.message}</p>}
      <NewPostForm 
        onCancel={cancelHandler} 
        submitting={false}
      />
    </>
  )
}

export default NewPost


export async function action({request}){

  const formData = await request.formData();
  const node =  {      
    "data": {
      "type": "node--article",
      "attributes": {
        "title": formData.get("title"),
        "body": {
          "value": formData.get("body"),
          "format": "plain_text"
        }
      }
    }
}; 
console.log(node);

try{

  if(node.data.attributes.title.trim().length < 0
  || node.data.attributes.body.value.trim() < 10) {
      // eslint-disable-next-line no-throw-literal
      throw {message: 'Empty field', status: 422};
    }
      await post(node, '/jsonapi/node/article');
    }catch(error){
        return error;
  }

return redirect('/articles');




}
