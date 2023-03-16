import Quotes from './Quotes';


import ArrowDown from '../../../components/ArrowDown';


function Landing001({quoteData}) {

  

  console.log(quoteData);
  
  
  return (
    <>
    <div className="relative w-full h-screen flex flex-col justify-center items-center">
    { 
      quoteData.quotes.length 
      ? <Quotes quotes={quoteData.quotes} /> 
      : ""
    }
      
      <div className='z-50 m-20 text-2xl font-light tracking-widest border-b text-gray-600 dark:text-white'>Welcome to Lumbini Buddha Dharma Society</div>
      <div className='animate-bounce'><ArrowDown /></div>
    </div>
    </>
  )
}

export default Landing001
