import {useState, useEffect} from 'react'
import { Outlet, Link } from 'react-router-dom';
import Back from './components/Back';
import Darkmode from './components/darkmode';


function App() {
  
  

  const [theme, setTheme] = useState("light");

  useEffect(() => {

    if(theme === "dark") {
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])

  return (
    <>
    <div className="relative w-full overflow-hidden">

      {/** DARK BUTTON AND BACK BUTTON ON FIXED ROW */}
      <div className="fixed bg-white dark:bg-slate-700 w-full flex justify-between z-50">

        {/** Ui Library Title and logo - 1 */}
        <div className='p-4'><Link to="/">Yw - Ui Library</Link></div>
      
      {/** Nav button to simpliwebdesign site */}
        <Link 
        className='mt-5 text-xs font-light tracking-widest'
        to="https://simpliwebdesign.com">SimpliWebDesign.com</Link>
      
      {/** GRID - 3 */}
        <div className="grid grid-cols-3">
          <Darkmode theme={theme} setTheme={setTheme} />
          <Back />
        </div> 
      
      </div>


      {/** ALL THE CONTENTS */}
      <div className='mt-6 pt-4'>
        <Outlet />
      </div>
        
    </div>
    </>
  )
}

export default App
