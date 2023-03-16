import {Link} from 'react-router-dom';


const style = "md:w-72 md:h-72 w-32 h-32 font-light drop-shadow-md flex flex-wrap justify-center items-center border dark:border-slate-600 md:m-2  m-2"


function Page() {
  return (
    <div className="2xl:container xl:my-20">
    <div className="flex flex-wrap">

      {/** HERO SECTION */}
      <Link className={style} to="navigation-menu">Navigation Menu</Link>
      
      {/** HERO SECTION */}
      <Link className={style} to="hero-section">Hero Section</Link>

      {/** FORM SECTION */} 
      <Link className={style} to="forms">Forms</Link>
      
      {/** FEATURE SECTION */} 
      <Link className={style} to="feature-section">Feature Section</Link>
      

      {/** LANDING PAGE SECTION */}
      <Link className={style} to="landing-page">Landing Pages</Link>
      
      {/** INTRODUCTION PAGE SECTION */}
        <Link className={style} to="aboutus">About Pages</Link>

      {/** NEWS SECTION */}
      <Link className={style} to="news">News Sections</Link>
      
      {/** GALLERY SECTION */} 
      <Link className={style} to="galleries">Galleries</Link>

      {/** CALL TO ACTION SECTION */} 
      <Link className={style} to="calltoaction">Call To Action</Link>


      {/** CALL TO ACTION SECTION */} 
      <Link className={style} to="testimonials">Testimonials</Link>

      {/** CALL TO ACTION SECTION */} 
      <Link className={style} to="blogs">Blogs</Link>



       {/** LUMBIN BDS - THEME PLAN SECTION */}
        <Link className={style} to="lumbini">Lumbini</Link>
      </div>
    </div>
  )
}

export default Page
