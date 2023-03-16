import axios from "axios";
import {baseurl} from '../../redux/config';

export const submitPostData = async (data) => {
  console.log("Function export + ",data);

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
      data:  {
        "webform_id": "ask_me_form",
        "name": data.name,
        "email": data.email,
        "subject": data.subject,
        "message": data.message,
        "captch": data.captcha
      }
    })
    .then((res)=> {
      res.status === 200 && console.log("Post Success - ",res);
    })
    .catch(err => console.log("SUBMIT FAIL ERROR ",err))
  }


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



}

