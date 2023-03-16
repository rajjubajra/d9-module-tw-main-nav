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


function Feature005() {
  return (
  <div className="w-full min-h-screen grid md:grid-cols-2">

  <div className="md:p-20">
    <div>
    {/** title */}
    <div className='text-5xl mt-10 mb-6 font-thin first-letter:text-6xl'>
    Services Offered
    </div>

    <div className='first-letter:font-light first-letter:text-5xl font-mono md:pr-20 md:border-r'>All products are built to withstand daily wear and tear, so you can enjoy them for years to come. Our customer service team is available 24/7 to answer any questions or concerns you may have.We pride ourselves on providing exceptional service and support to our customers. Whether you need assistance with an order or have a product issue, our team is here to help.</div>
    </div>
  </div>
  <div>
    <div className="my-10 md:grid md:grid-cols-2 gap-2 font-mono">
        {
          data?.map( item => {
            return <div className="bg-gray-800 text-gray-200 md:p-10 p-5 md:border m-1 my-5 md:my-0">
                {item.text}
            </div>
          })
        }
    </div>
  </div>

    </div>
  )
}

export default Feature005
