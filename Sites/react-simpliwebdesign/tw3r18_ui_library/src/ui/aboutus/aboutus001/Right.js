import data from '../data.json';

function  Right() {


  console.log(data.data.length, "Length",)

  return (
    <div className='relative w-full'>
      {
        data.data.length ?
        data.data.map((item,index)=> {
          return <div className='relative w-full md:grid md:grid-cols-2 mt-10'>
            <div className='md:w-1/2 m-auto md:text-4xl text-2xl tracking-wide border-r-2 border-blue-400 pr-10 first-letter:text-sky-500 first-letter:font-bold first-letter:text-6xl'>{item.title}</div>
            <div>
              <div className='font-light first-letter:text-2xl' dangerouslySetInnerHTML={{__html: item.body }}  />
            </div>
          </div>
        })
        : "data not found"
      }
    </div>
  )
}

export default Right
