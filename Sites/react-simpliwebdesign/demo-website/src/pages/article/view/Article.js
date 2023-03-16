import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
//conponents
import LayoutArticle from "./LayoutArticle";
import {fetchRemoteOne, fetchLocalOne} from '../../../functions/fetch';


export async function loader({params}){

  const {uuid} = params;
  console.log(uuid);

  return window.location.origin === 'http://localhost:3000'
  ? defer({posts: fetchLocalOne(`/data?type=node--article&id=${uuid}`)}) 
  : defer({posts: fetchRemoteOne(`/jsonapi/node/article/${uuid}`)}) 
}


function Article() {

  const loaderData = useLoaderData();

  console.log(loaderData);

  return (
    <>  
    <Suspense fallback={<p>Loading...</p>}>
      <div>Article: </div>
      <Await resolve={loaderData.posts} errorElement="Loading error.."> 
          {(loadedData) => <LayoutArticle data={loadedData} />}
      </Await>
    </Suspense>
    </> 
  )
}

export default Article; 

