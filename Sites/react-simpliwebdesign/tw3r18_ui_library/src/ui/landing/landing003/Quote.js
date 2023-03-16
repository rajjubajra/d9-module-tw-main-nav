

function Quote({data}) {
  return (
    <div className='relative z-50 md:text-2xl md:border-l-8 border-sky-700 px-4 md:pl-10 md:pr-10 text-xl font-light tracking-widerbor border-r md:first-letter:text-6xl  first-letter:text-3xl first-letter:text-sky-700 first-letter:font-bold'>
      {data.welcome.text}
      </div>
  )
}

export default Quote
