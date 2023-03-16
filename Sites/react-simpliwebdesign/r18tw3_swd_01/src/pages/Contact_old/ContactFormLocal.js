import {useState} from 'react';
import ContactFormContainer from './ContactFormContainer';
import {SubmitForm} from './SubmitForm_jsonapi';


function ContactFormLocal() {

  /** form submit values */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submit, setSubmit] = useState(false);
  
  console.log(submit);
  
  /** form submit handler */
  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault(); 

    /** form input data */
    const data = {
      "webform_id": "ask_me_form",
      "name":name,
      "email": email,
      "subject": subject,
      "message": message
    }

    /** FORM POST TO URL 
     * `${baseurl.URL}/webform_rest/submit?_format=json` */
    SubmitForm(data, setSubmit)

  }//handleSubmit closed



  console.log("LOCALHOST FORM");

  return (
  <ContactFormContainer 
  submit={submit} 
  handleSubmit={handleSubmit}
  setName={setName}
  setEmail={setEmail}
  setSubject={setSubject}
  setMessage={setMessage}
  />)
}

export default ContactFormLocal