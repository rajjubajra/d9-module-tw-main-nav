import React from 'react';
//import ContactForm from './ContactForm';
import SubscriptionFrom from './SubscriptionForm';
import ImageOnload from '../ImageOnload';

function Contact() {
  return (
    <div className="grid grid-cols-12 max-w-screen-xl m-auto p-10">
      <div className="col-span-12 md:col-span-4">
            <h2 className="text-3xl py-10">Contact</h2>

            <ImageOnload 
            cssClass="w-full h-40 md:h-40  md:w-1/2 md:h-96 object-cover"
            src="./images/Music2011_5.jpeg" 
            alt="Music Page"
            />

            <div className="py-10">
              <h3 className="text-2xl">General Enquiries</h3>
              <p>infor@example.com</p>  
            </div>

            <div className="py-10">
              <h3 className="text-2xl mb-3">Booking Agencies</h3>
              <ul className="grid gap-y-4">
                <li>Agency one</li>
                <li>Agency one</li>
                <li>Agency one</li>
                <li>Agency one</li>
              </ul>
            </div>
      </div>

      <div className="col-span-12 md:col-span-8">
        <SubscriptionFrom />
      </div>
    </div>
  )
}

export default Contact
