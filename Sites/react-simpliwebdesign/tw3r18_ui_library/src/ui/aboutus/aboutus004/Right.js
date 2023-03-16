

function  Right({data}) {

  console.log(data.data.length, "Length",)

  return (
    <div className='relative w-full'>
          <div className='relative w-full'>
            <div>
              <div className='font-light first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:text-blue-500' dangerouslySetInnerHTML={{__html: data.data[0].body }}  />
            </div>
        </div>
    </div>
  )
}

export default Right
