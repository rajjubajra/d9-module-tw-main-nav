import axios from 'axios';
import {baseurl} from '../../redux/config';
import { actionAskMeForm } from '../../redux/askMeFormSlice';


export const SubmitForm = async (data, setSubmit, setSubmitResponse) => {

/** GET SESSION TOKEN  */
  await axios({
    method: 'GET',
    url: `${baseurl.URL}/session/token`,
    headers: {
      'Accept': 'application/vnd.api+json',
    }
  })
  .then(response => {
    submitMsg(response.data)
    console.log("console - 1 jsonapi", response)
  })
  .catch(err => console.log("Token Err", err))

/** POST FORM DATA */
  function submitMsg(token){
    axios({
      method: 'post',
      url: `${baseurl.URL}/webform_rest/submit?_format=json`,
      headers:{
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      },
      data: data
    })
    .then((res)=> {
      actionAskMeForm();
      console.log("console - 2 jsonapi [DATA POST RESPONSE]",res)
      getAskMeFormSettings(token);
      res.status === 200 && setSubmit(true);
    })
    .catch(err => console.log("SUBMIT FAIL ERROR ",err))
  }

  /** RETURN SETTINGS - CONFIRMATION MESSAGE ETC. */
  function getAskMeFormSettings(token){
    console.log("token?", token)
    axios({
      method: 'GET',
      url: `${baseurl.URL}/jsonapi/webform_submission/ask_me_form?include=webform_id`,
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'X-CSRF-Token': token,
        }
      })
      .then(res => {
        console.log(" console - 7 jsonapi [ form settings data ] ", res);
        setSubmitResponse(res)
      })
      .catch(err => console.error(err)) 
  }




}