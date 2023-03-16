import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from '../yw-logo.png';
import ArrowRight from './ArrowRight';
/**
 * THIS Component IS ONLY FOR WEBSITE PREVIEW BUTTON
 * ONCE PREVIEW IS PRESSED IT WILL NAVIGATE TO A PAGE
 * AND THIS PAGE WILL NO LONGER BE AVAILABLE
 * 
 * In order to use it, put this component at the bottom of the layout component.
 */

function Preview() {


  const [previewBtn, setPreviewBtn] = useState(true);



  return (
    <>
    {
      previewBtn &&
      <div className="w-full h-screen fixed top-0  flex flex-wrap flex-col justify-center items-center z-50">

        <section>
          <div>
            <img className="w-20 h-auto mb-2" src={logo} alt="yw logo" />
          </div>
        </section>
          
        <section>
          <div className="font-light mb-20">
            <Link to="https://simpliwebdesign.com">Welcome to yellow-website</Link>
          </div>
        </section>

        <section>
          <Link 
          className="cursor-pointer border-b hover:bg-slate-100 dark:hover:bg-gray-900 py-8 px-20  tracking-widest flex" 
          to="/" onClick={()=>setPreviewBtn(false)} >
          
          <span className="font-bold p-5 text-xl  border rounded-full">Ui</span> 
          <span className="ml-4 py-6">Library</span>
          <span className="py-6 pl-4"><ArrowRight /></span>
          </Link>
        </section>
        
      </div>
    }
    </>
    
  )
}

export default Preview
