import axios from 'axios';
import {baseurl} from '../../redux/config';


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
    console.log("console - 1 restapi ", response)
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
      console.log("console - 2 restapi [DATA POST RESPONSE]",res)
      res.status === 200 && getSubmission(token, res.data.sid)
      res.status === 200 && setSubmit(true)
    })
    .catch(err => console.log("SUBMIT FAIL ERROR ",err))
  }

/** RETURNS SUBMITTED DATA VIA SID */
  function getSubmission(token, sid){
      console.log("console - 3 restapi : [SESSSION Token]", token);
      axios({
        method: 'GET',
        url: `${baseurl.URL}/webform_rest/ask_me_form/submission/${sid}?_format=json`,
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': token
        }
      })
      .then(res => {
        console.log("console - 4 restapi [RES SUBMITTED DATA]",res)
        getWebformSubmission(token, res.data.entity )
      })
      .catch(err => console.error(err))
  }

/** RETURNS SUBMITTED DATA VIA UUID */
  function getWebformSubmission(token, uuid) {
    console.log("console - 5 restapi ",token, uuid.uuid[0].value);
    axios({
      method: 'GET',
      url: `${baseurl.URL}/webform_rest/ask_me_form/submission/${uuid.uuid[0].value}`,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      }
    })
    .then(res => {
      console.log("console - 6 restapi ",res)
      getAskMeForm(token)
    })
    .catch(err => console.error(err))
  }

/** RETURN SETTINGS - CONFIRMATION MESSAGE ETC. */
  function getAskMeForm(token){
    axios({
      method: 'GET',
      url: `${baseurl.URL}/jsonapi/webform_submission/ask_me_form?include=webform_id`,
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'X-CSRF-Token': token
        }
      })
      .then(res => {
        console.log("console - 7 restapi ",res.data);
        setSubmitResponse(res.data)
      })
      .catch(err => console.error(err)) 
  }

}