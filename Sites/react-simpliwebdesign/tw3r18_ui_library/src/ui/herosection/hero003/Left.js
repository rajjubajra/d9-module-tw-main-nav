import Title from './Title';

function Left() {


  return (
    <div className="w-full md:h-screen flex flex-col justify-center">

      <div className='p-10'>
          
          <div className='hidden sm:block'>
          <Title />
          </div>
          
          <div className='font-light text-sm mt-10'>
          Introducing our smartwatch, the perfect accessory for anyone who values both style and functionality. Stay connected with features like GPS tracking, heart rate monitoring, and activity tracking, while receiving notifications, making calls, and sending messages all from your wrist. With a customizable design and water-resistant build, our smartwatch is perfect for any occasion. Plus, with long-lasting battery life, you can wear it all day without worry. Get your hands on our smartwatch and become a hero of convenience and productivity today!
          </div>

          <div className="grid grid-cols-3 text-center my-10 font-thin">
            <div>
              <div className="sm:text-6xl text-4xl">10</div>
              <div className='font-light'>ATM</div>
            </div>
            <div>
              <div  className="sm:text-6xl text-4xl">60</div>
              <div className='font-light'>MM Metal</div>
            </div>
            <div>
              <div  className="sm:text-6xl text-4xl">496</div>
              <div className='font-light'>Case</div>
            </div>
          </div>

          <div className="py-3 px-5 bg-yellow-900  text-gray-100 w-48 text-center font-light">
          Product Detail</div>
      </div>  

    </div>
  )
}

export default Left
