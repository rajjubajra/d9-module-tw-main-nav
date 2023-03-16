import { useNavigate } from "react-router-dom"

function PageNotFound() {

  const navigate = useNavigate();

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div className='font-bold text-4xl'>404</div>
      <div className='text-6xl my-5'>Page not found</div>
      <div className="flex">
        <div
        className="px-8 py-2 border border-gray-900 cursor-pointer bg-slate-300 hover:bg-slate-500 hover:text-gray-200 font-light tracking-widest" 
        onClick={() => navigate(-1) }>Back</div>
      </div>
    </div>
  )
}

export default PageNotFound
