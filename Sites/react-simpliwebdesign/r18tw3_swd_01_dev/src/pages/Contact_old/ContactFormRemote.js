import {useState} from 'react';
import ContactFormContainer from './ContactFormContainer';
import {SubmitForm} from './SubmitForm_restapi';


function ContactFormRemote() {


  /** form submitted field values */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState('');


  /** Required Field error message states */
  const [requiredName, setRequiredName] = useState('');
  const [requiredEmail, setRequiredEmail] = useState('');
  const [requiredMessage, setRequiredMessage] = useState('');
  const [requiredCaptcha, setRequiredCaptcha] = useState('');


  /** Set field value into data object */
  const [data, setData] = useState('');


  /** SUBMIT ACTIONS */
  /** submit true or false */
  const [submit, setSubmit] = useState(false);
  /** Submit response - response jsonapi of submit confirmation message */
  const [submitResponse, setSubmitResponse] = useState(''); 
  /** SET Header Error Message  */
  const [errorMessage, setErrorMessage] = useState('');

  /** form submit handler */
  const handleSubmit = async (e) => {
    
    e.preventDefault(); 

    /** Form submitted values */
    const firmData = {
      "webform_id": "ask_me_form",
      "name": name,
      "email": email,
      "subject": subject,
      "message": message,
      "captcha": captcha
    }

    firmData && setData(firmData);

    console.log("submitted data object",firmData);
    console.log("submit status : ", submit);    
    console.log("submitted data",data);
    console.log("captcha code ", captcha);
    console.log("Captcha value ? ", data.captcha ? true : false);
    console.log("Error Message", errorMessage);


    /** Field validation error message */
    name ? setRequiredName('') : setRequiredName("Please enter name")
    email ? setRequiredEmail('') : setRequiredEmail("Please enter email")
    message ? setRequiredMessage('') : setRequiredMessage("Please enter message")
    captcha ? setRequiredCaptcha('') : setRequiredCaptcha("Please check captcha")


    /** Required fields are empty  setErrorMessage */
      !data.name &&
      !data.email && 
      !data.message && 
      !captcha 
    ? setErrorMessage("Please enter required field")
    /** after validation completion POST Submit and remove error message */
    : name && 
      email && 
      message && 
      captcha && 
    SubmitForm(data, setSubmit, setSubmitResponse) && 
    setErrorMessage("");

  }//handleSubmit closed

  /** form submit validation Messages */
  /** note: Header error message is being used instead of individual validation message */
  

  console.log(requiredName, requiredEmail, requiredMessage, requiredCaptcha);


  return (
    <ContactFormContainer 
    submit={submit} 
    handleSubmit={handleSubmit}
    setName={setName}
    setEmail={setEmail}
    setSubject={setSubject}
    setMessage={setMessage}
    setCaptcha={setCaptcha}
    submitResponse={submitResponse}
    errorMessage={errorMessage}
    />)
}

export default ContactFormRemote