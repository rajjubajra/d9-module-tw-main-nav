import {Form} from 'react-router-dom'


const input = 'border-b px-2 py-3 my-2 outline-0 placeholder:font-thin bg-transparent placeholder:tracking-widest';
const text = 'h-40 border px-2 py-3 outline-0 bg-transparent placeholder:font-thin placeholder:tracking-widest my-6';

function Form001() {
  return (
  <div className='w-full min-h-screen flex justify-center items-center'>
  <Form  className='md:w-96 flex flex-col' method="post" action="#">
    <h2>Drop us a line !</h2>
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
    className='w-32 border py-4 uppercase font-light tracking-wider bg-slate-200 hover:bg-slate-300 dark:text-gray-500'
    type="submit">Send</button>
  </Form>
  </div>
  )
}

export default Form001
