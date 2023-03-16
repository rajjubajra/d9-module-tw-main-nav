import {useState, useEffec} from 'react';
import Button from './Button';

function Layout({data}) {

console.log(data.sort((a,b)=> b.attributes.created - a.attributes.created ))
console.log("data",data);

  try{
    return(
      
      data?.map((item, index)=> {
          const {body, title} = item.attributes;
          return (<div key={index} className="m-3 p-4 border flex justify-between">
            <div>
              <h3>{title}</h3>
              <div>
              <div dangerouslySetInnerHTML={{__html: body.value}}  />
              <div>{item.id}</div>
              </div>
            </div>
            <div className='text-xs font-light gap-2 grid'>
              <Button path={`/article/update/${item.id}`} name="Edit" />
              <Button path={`/article/delete/${item.id}`} name="Delete" />
              <Button path={`/article/${item.id}`} name="View" />
            </div>
          </div>)
        })
    )
  }catch(error){
      throw new Error("Error Lising", error);
  }
  
}

export default Layout

// data?.map((item, index)=> {
//   const {body, title} = item.attributes;
//   return (<div key={index} className="m-3 p-4 border flex justify-between">
//     <div>
//       <h3>{title}</h3>
//       <div>
//       <div dangerouslySetInnerHTML={{__html: body.value}}  />
//       <div>{item.id}</div>
//       </div>
//     </div>
//     <div className='text-xs font-light gap-2 grid'>
//       <Button path={`/article/update/${item.id}`} name="Edit" />
//       <Button path={`/article/delete/${item.id}`} name="Delete" />
//       <Button path={`/article/${item.id}`} name="View" />
//     </div>
//   </div>)
// })