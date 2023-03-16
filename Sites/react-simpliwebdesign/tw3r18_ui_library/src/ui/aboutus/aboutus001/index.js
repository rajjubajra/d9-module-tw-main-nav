import Right from './Right';




function Aboutus001() {


  return (
    <div className='relative w-full min-h-screen'>
      <div className='relative z-50 md:border-l-4 md:border-red-500'>
        <Right /> 
      </div>
      <div className='z-0 absolute inset-36 flex justify-end'>
          <div className='w-32 h-32 md:bg-green-500 blur opacity-50 
          md:-translate-y-20 translate-y-56 rotate-0 
          md:-translate-x-32'></div>
          <div className='w-32 h-32 md:bg-sky-500 blur opacity-50 
          md:translate-y-32 translate-y-96 rotate-12 
          -translate-x-32'></div>
          <div className='w-32 h-32 md:bg-red-500 blur opacity-40 
          md:translate-y-0 translate-y-80
          -translate-x-11 rotate-45'></div>
      </div>
    </div>
  )
}

export default Aboutus001
