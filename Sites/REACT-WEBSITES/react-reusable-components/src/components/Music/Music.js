import MenuBar from '../../components/MainMenu/MenuBar';
import Home01 from './Home01';
import Home02 from './Home02'; 
import Home03 from './Home03';
import TourList from './TourList';
import TourList02 from './TourList02';
import TourDetail from './TourDetail';
import NewsList from './NewsList';
import NewsList02 from './NewsList02';
import NewsDetail from './NewsDetail';
import NewsDetail02 from './NewsDetail02';
import About from './About';
import About02 from './About02';
import Gear from './Gear';
import MusicList from './MusicList';
import MusicList02 from './MusicList02';
import MusicDetail from './MusicDetail';
import MusicDetail02 from './MusicDetail02';
import Contact from './Contact';
import Contact02 from './Contact02';

function Music() {

  function ComName(name){
    return <div className="text-center w-full">
      {name}
    </div>
  }


  return (
    <div className="grid grid-flow-row gap-8 font-extralight">
        <MenuBar />
        {ComName("Home01")}
        <Home01 />
        {ComName("Home02")}
        <Home02 />
        {ComName("Home03")}
        <Home03 />
        {ComName("TourList")}
        <TourList />
        {ComName("TourList02")}
        <TourList02 />
        {ComName("TourDetails")}
        <TourDetail />
        {ComName("NewsList")}
        <NewsList />
        {ComName("NewsList02")}
        <NewsList02 />
        {ComName("NewsDetail")}
        <NewsDetail />
        {ComName("NewsDetail02")}
        <NewsDetail02 />
        {ComName("About")}
        <About />
        {ComName("About02")}
        <About02 />
        {ComName("Gear")}
          <div className="grid grid-cols-3 grid-rows-3 gap-3 p-10">
                <Gear />
                <Gear />
                <Gear />
          </div>
          {ComName("Gear")}
            <Gear />
          {ComName("MusicList")}  
          <MusicList />
          {ComName("MusicList02")}  
          <MusicList02 />
          {ComName("MusicDetails")}
          <MusicDetail />
          {ComName("MusicDetails02")}
          <MusicDetail02 />
          {ComName("Contact")}
          <Contact />
          {ComName("Contact02")}
          <Contact02 />

      </div>
  )
}

export default Music
