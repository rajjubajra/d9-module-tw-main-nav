import { useEffect, useState } from 'react';
import { four_noble_truth } from '../../../assets';
import gsap  from 'gsap';

function Quotes(quotes) {

  const [showQuote, setShowQuote] = useState(0);


  useEffect(() => {

    console.log(quotes.quotes.length);
    setShowQuote(Math.floor(Math.random()* quotes.quotes.length)+1);

  },[quotes.length, quotes.quotes.length])

  useEffect(()=>{
    gsap.to(".quote",{ opacity: 1, duration: 3})

  },[])

  console.log("QUOTES",quotes.quotes[showQuote], showQuote);
  

  return (
    <>
      <img className="fixed z-0 opacity-25 w-full grayscale-100" src={four_noble_truth} alt="four noble truth" />
      <div className='sm:w-3/4 sm:p-2 p-20 quote'>
        <span className='sm:text-6xl  text-3xl font-thin'>
        {quotes.quotes[showQuote].quote}</span>
        <span className='block mt-10 text-right italic font-thin'> - {quotes.quotes[showQuote].by}</span>
      </div>
    </>
  )
}

export default Quotes
