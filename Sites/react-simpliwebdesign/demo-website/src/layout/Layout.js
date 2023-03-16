import Header from './Header';
import Footer from './Footer';
import Navigation from '../component/navigation/Navigation';

function Layout({children}) {
  return (
    <div className='w-full h-vh'>
    <Header />
      <Navigation />
      <div className='flex justify-center'>
      <div className='m-12 max-w-[800px] w-full'>
        {children}
      </div>
      </div>
    <Footer/>
    </div>
  )
}

export default Layout
