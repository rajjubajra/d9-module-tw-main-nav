import Button from './Button';


function LayoutArticle({data}) {


  return (
    <div>
      <div className="m-3 p-4 border grid gap-4">

          {/** header */}
            <div className='text-xs font-light gap-4 flex justify-end'>
            <Button path={`/article/update/${data.id}`} name="Edit" />  
            <Button path={`/article/delete/${data.id}`} name="Delete" />
            </div>

          {/** body */}
            <div>
              <h3 className='font-bold'>{data.attributes.title}</h3>
              <div className='my-4'>
              <div dangerouslySetInnerHTML={{__html: data.attributes.body.value}}  />
              <div className='text-xs my-4'>Id: {data.id}</div>
              </div>
            </div>
      </div>
    </div>
    
  )
}

export default LayoutArticle
