import React from 'react';
import ContactFormLocal from './ContactFormLocal';
import ContactFormRemote from './ContactFormRemote';


function ContactForm(data) {

  return (
    window.location.origin === 'http://localhost:3000'
    ? <ContactFormLocal />
    : <ContactFormRemote />
  )
}

export default ContactForm