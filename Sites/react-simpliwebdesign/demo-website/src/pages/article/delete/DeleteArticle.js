import { Suspense } from "react";
import { Link, useLoaderData, Form } from "react-router-dom";
//conponents
import {fetchRemoteOne, fetchLocalOne} from '../../../functions/fetch';





/** LOAD SELECTED DATA IN FORDER TO CONFIRM THE DELETE */
export async function loader({params}){
  const {uuid} = params;
  console.log(uuid);

  return window.location.origin === 'http://localhost:3000'
  ? fetchLocalOne(`/data?type=node--article&id=${uuid}`)
  : fetchRemoteOne(`/jsonapi/node/article/${uuid}`)
}

/** VIEW LOADED DATA */
function DeleteArticle() {

  const loaderData = useLoaderData();
  console.log(loaderData);



  return (
    <>  
    <Suspense fallback={<p>Loading...</p>}>
      <div>Delete Article: </div>
      <div className="text-red-700">Are you sure you want to delete this article?</div>
      <div className="border p-4 my-4">
        <div>{loaderData.attributes.title}</div>
      </div>
        
      <Form method="post" action="destroy">
        <button  type="submit" className="form-btn">Delete</button>
        <Link className="form-btn" to="/articles">Cancel</Link>
      </Form>
    </Suspense>
    </> 
  )
}
export default DeleteArticle; 
