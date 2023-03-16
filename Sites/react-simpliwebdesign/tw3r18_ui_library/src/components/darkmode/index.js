import Dark from './Dark';
import Light from './Light';

function Darkmode({theme, setTheme}) {


  return (
    <div>
      {
        theme === 'light'
        ? <div className="p-2 cursor-pointer" 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}><Light /></div>
        : <div className='p-2 cursor-pointer' 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}><Dark /></div>
      }
    </div>
  )
}

export default Darkmode
