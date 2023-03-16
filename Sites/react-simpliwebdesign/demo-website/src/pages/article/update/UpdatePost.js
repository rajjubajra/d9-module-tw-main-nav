import { Suspense } from 'react';
import {useLoaderData, defer, Await,redirect} from 'react-router-dom';
import {fetchRemoteOne, fetchLocalOne} from '../../../functions/fetch';
import UpdateForm from './UpdateForm';
import {update} from '../../../functions/update';




/** UPDATE ACTION */
export async function action({request, params}){

  const {uuid} = params;

  const formData = await request.formData();
   
  const node =  {      
    "data": {
      "type": "node--article",
      "id": uuid,
      "attributes": {
        "title": formData.get("title"),
        "body": {
          "value": formData.get("body"),
          "format": "plain_text"
        }
      }
    }
  }; 
  console.log("POST DATA [NODE]: ",node);

  try{
    if(node.data.attributes.title.trim().length < 0
    || node.data.attributes.body.value.trim() < 10) 
      {
        // eslint-disable-next-line no-throw-literal
        throw {message: 'Empty field', status: 422};
      }
        await update(node, '/jsonapi/node/article', uuid);
      }catch(error){ return error; }

  return redirect('/articles');
}


/** GET EXISTING DATA IN ORDER TO LOAD IN TO THE FORM */
export async function loader({params}){

  const {uuid} = params;
  return window.location.origin === 'http://localhost:3000'
  ? defer({posts: fetchLocalOne(`/data?type=node--article&id=${uuid}`)}) 
  : defer({posts: fetchRemoteOne(`/jsonapi/node/article/${uuid}`)}) 

}

/** UPDATE FORM VIEW */
function UpdatePost() {

  const loaderData = useLoaderData();

  console.log(loaderData);

  return (
    <div>  
      <Suspense fallback={<p>Loading...</p>}>
        <div>Article: </div>
        <Await resolve={loaderData.posts} errorElement="Loading error.."> 
            {(loaderData) => <UpdateForm data={loaderData} />}
        </Await>
      </Suspense> 
    </div>
  )
}

export default UpdatePost