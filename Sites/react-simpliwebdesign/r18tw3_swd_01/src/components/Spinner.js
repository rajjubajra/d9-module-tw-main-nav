import ywlogo from '../swd-logo-square.png';


function Spinner() {

  return (
    <div  className="fixed top-0 z-50 bg-white w-full h-screen flex flex-col justify-center items-center">
      <img className="w-32 p-3" src={ywlogo} alt="simpliwebdesign.com" />
      <p className="text-sm uppercase font-thin" >Loading...</p>
    </div>
  )
}

export default Spinner