import React from 'react';



const data = [
  {
    "id": 1,
    "text": "Made with the highest quality materials to ensure durability and longevity.We source our materials from trusted suppliers and use rigorous testing to ensure they meet our standards.",
    "icon": "",
  },
  {
    "id": 2,
    "text": "Committed to sustainability and reducing our environmental impact. We use eco-friendly materials and production methods wherever possible. We also prioritize reducing waste and recycling materials to minimize our footprint.",
    "icon": "",
  },
  {
    "id": 3,
    "text": "Transparency and honesty in all our interactions. We believe in building trust with our customers, employees, and partners through open communication and ethical practices.",
    "icon": "",
  },
  {
    "id": 4,
    "text": "Focused on collaboration, innovation, and continuous improvement. We encourage our employees to share ideas and work together to find creative solutions. We also invest in ongoing training and development to ensure our team is always learning and growing.",
    "icon": "",
  }
]


function Feature003() {
  return (
  <div className="w-full min-h-screen flex">

    <div className='w-1/6 bg-gray-200 h-screen'>
      <div className='-rotate-90 translate-y-96 dark:text-slate-800 text-6xl tracking-wider'> Feature
      </div>
    </div>

    <div className='w-full md:pl-6 ml-5'>
        <div>
        {/** title */}
        <div className='text-5xl mt-10 mb-6 font-thin first-letter:text-6xl'>
        Services Offered
        </div>

        <div className='first-letter:font-light first-letter:text-5xl font-mono'>All products are built to withstand daily wear and tear, so you can enjoy them for years to come. Our customer service team is available 24/7 to answer any questions or concerns you may have.We pride ourselves on providing exceptional service and support to our customers. Whether you need assistance with an order or have a product issue, our team is here to help.</div>
        </div>

        <div className="my-10 md:ml-16 md:w-4/5 flex flex-wrap font-mono">
            {
              data?.map( item => {
                return <div className="md:p-5 my-5">
                    {item.text}
                </div>
              })
            }
        </div>
    </div>

    </div>
  )
}

export default Feature003
