import Title from '../components/Title';
import Introduction from '../components/Introduction';
import BigNav from '../components/BigNav';



/** 7 days a week backgournd colour */
const bgcolor = [
  "bg-gradient-to-r from-yellow-50",
  "bg-gradient-to-r from-red-50",
  "bg-gradient-to-l from-gray-200",
  "bg-gradient-to-l from-green-50",
  "bg-gradient-to-l from-blue-50",
  "bg-gradient-to-l from-white",
  "bg-gradient-to-l from-gray-300",
]

function Home() {

  const date = new Date();
  console.log(date.getDay());


  return (
    <div className="w-full h-screen relative grid grid-cols-12">
      <div className="lg:col-span-4 col-span-12">
        <Introduction />
      </div>
      <div className="lg:col-span-6 md:col-span-8 col-span-6">
        <BigNav />
      </div>
      <div className="lg:col-span-2">
        <Title title="Menu" />
      </div>
    </div>

  )
}

export default Home
