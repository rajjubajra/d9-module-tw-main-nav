import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
//conponents
import Layout from "./Layout";
import {fetchRemote, fetchLocal} from '../../../functions/fetch';


export function loader(){
  
  return window.location.origin === 'http://localhost:3000'
  ? defer({posts: fetchLocal('/data?type=node--article')}) 
  : defer({posts: fetchRemote('/jsonapi/node/article')}) 

}


function Articles() {

  const loaderData = useLoaderData();

  console.log(loaderData);

  return (
    <>  
    <Suspense fallback={<p>Loading...</p>}>
      <div>Article List : CRUD App</div>
      <Await resolve={loaderData.posts} errorElement="Loading error.."> 
          {(loadedData) => <Layout data={loadedData} />}
      </Await>
    </Suspense>
    </> 
  )
}

export default Articles; 

