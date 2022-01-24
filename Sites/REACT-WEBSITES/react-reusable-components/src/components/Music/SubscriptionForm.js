// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import {useState} from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';



function SubscriptionFrom() {

  const [country, setCountry] = useState();
  const [region, setRegion] = useState();

  

  return (
    <div className="w-full p-10">
      <form action="">
        <div className="py-10">
          <h3 className="text-2xl">Fans Club</h3>
          <p>Please fillout the form below to the join Fans Club</p>
        </div>
        <div className="flex flex-col">
            <input className="border border-gray-300 outline-none px-3 py-2" type="text" placeholder="Name" />
        </div>
        <div className="flex flex-col">
            <input className="border-l border-r border-gray-300 outline-none px-3 py-2 " type="text" placeholder="Email" />
        </div>
        <CountryDropdown
          classes="border border-gray-300 outline-none px-3 py-2 w-full"
          value={country}
          onChange={(val) => setCountry(val)} />
        <RegionDropdown
          classes="border-l border-r border-b border-gray-300 outline-none px-3 py-2 w-full"
          country={country}
          value={region}
          onChange={(val) => setRegion(val)} />

        
        <div className="mt-4">
            <input type="submit" value="Submit" 
            className="border border-gray-300 px-3 py-2 hover:bg-gray-500 hover:text-white" />
        </div>

      </form>
      
    </div>
  )
}

export default SubscriptionFrom
