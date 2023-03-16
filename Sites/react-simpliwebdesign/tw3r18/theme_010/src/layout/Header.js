import Nav from './Nav';
import Logo from './Logo';

function Header() {





  return (
    <div className="relative z-50 flex justify-between w-full px-2 py-4 bg-gray-50">
      <Logo />  
      <Nav />
    </div>
  )
}

export default Header
