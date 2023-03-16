import {Form} from 'react-router-dom';


const input = 'w-96 block border-b px-2 py-3 my-2 outline-0 placeholder:font-light bg-transparent placeholder:tracking-widest';

function SubscriptionFrom() {
  return (
    <div>
        <Form className='w-96 flex'>
          <input 
            className={input} 
            type="email" 
            name="email" 
            placeholder="Email" />
          <button 
        className="h-10 mt-4 px-4 ml-3 bg-slate-500 text-slate-100 tracking-wider"
        type="submit">Subscribe</button>
        </Form>
    </div>
  )
}

export default SubscriptionFrom
