import data from '../data.json';

function  Right() {


  console.log(data.data.length, "Length",)

  return (
    <div className='relative w-full'>
      {
        data.data.length ?
        data.data.map((item,index)=> {
          return <div className='relative w-full my-10'>
            <div className='md:w-1/2 m-auto md:text-4xl text-2xl tracking-wide border-l-2 border-blue-400 pl-10 first-letter:text-sky-500 first-letter:font-bold first-letter:text-6xl order-2'>{item.title}</div>
            <div class="order-1">
              <div className='font-light first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:text-blue-500' dangerouslySetInnerHTML={{__html: item.body }}  />
            </div>
          </div>
        })
        : "data not found"
      }
    </div>
  )
}

export default Right
