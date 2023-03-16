import axios from "axios";
import {baseurl} from '../config';


export const update = async (data, url, id) => {
    
    console.log("data to update", data);
    console.log("url to update", url);
    console.log("id to update", id);

    /** GET SESSION TOKEN */
    try{
      const token = await axios({
        method: "GET",
        url: baseurl.URL + `/session/token`,
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-type': 'application/vnd.api+json',
        }
      })
      console.log("SESSION TOKEN : ",token.data);
      /** UPDATE DATA [PATCH] */
      try{
        const update = await axios({
          method: "PATCH",
          url: `${baseurl.URL}${url}/${id}`,
          headers: {
            'Accept': 'application/vnd.api+json',
            'Content-type': 'application/vnd.api+json',
            'X-CSRF-Token' : token.data
          },
          data: JSON.stringify(data)
        })
        console.log("UPDATE RESPONSE : ",update);
        return update;
      }catch(error){
        console.log("Try update error: ",error)
        return "UPDATE ERROR: " + error;
      }
    }catch(error){
        return "SESSION TOKEN - " + error;
    }


}