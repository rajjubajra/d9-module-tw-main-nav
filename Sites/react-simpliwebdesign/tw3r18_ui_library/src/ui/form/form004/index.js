import {Form} from 'react-router-dom';
import {bg_art} from '../../../assets'


const input = 'md:w-96 w-64 border-b border-green-300 px-2 py-3 my-2 outline-0  placeholder:font-thin bg-transparent placeholder:tracking-widest';
const text = 'w-full md:w-96 h-40 border border-green-300 px-4 py-3 outline-0 bg-transparent placeholder:font-thin placeholder:tracking-widest my-6';

function Form004() {
  return (
  <div className='relative w-full min-h-screen flex justify-center items-center' >

  <div className='md:w-10/12 grid md:grid-cols-2 gap-4'>
  {/** FORM SECTION */}
  <div className='order-2 w-full flex justify-center items-center'>
  <Form  className='relative z-50 flex flex-col md:px-0 px-4' method="post" action="#">
    <h2 className='text-green-600'>Drop us a line !</h2>
    
      <input 
      className={input} 
      type="text" 
      name="name" 
      placeholder="Name" />

      <input 
      className={input}
      type="email" 
      name="email" 
      placeholder='Email*' />
    

    <textarea 
    className={text}
    name="message" 
    placeholder="Message"></textarea>

    <button 
    className='w-32 border py-4 uppercase font-light tracking-wider bg-green-200 hover:bg-green-300 dark:text-gray-500'
    type="submit">Send</button>
  </Form>
  </div>

  {/** IMAGE SECTION */}
  <div className="order-1 w-full flex justify-center items-center">
  <img className='md:block hidden w-full lg:px-0 px-6 lg:h-auto h-screen object-cover z-0 opacity-50' src={bg_art} alt="background" />
  </div>

  </div>
  </div>
  )
}

export default Form004
