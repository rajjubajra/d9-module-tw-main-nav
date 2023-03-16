import axios from "axios";
import {baseurl} from '../config';


export const delete_article = async (url,id) => {
  console.log(url, id);
  try{
    const token = await axios({
      method: 'GET',
      url: baseurl.URL + '/session/token',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-type': 'application/vnd.api+json',
      }
    })
    console.log(token.data)
        /** POST DATA */
    const del = axios({
      method: 'DELETE',
      url: `${baseurl.URL}${url}/${id}`,
      id: id,
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'X-CSRF-Token' : token.data
      },
    })
    console.log("DELETE RESPONSE : ",del);
    return del;
  }catch(token_error){
    return token_error;
  }
}