import axios from "axios"
import {baseurl} from '../config';

export const post = async (data, url) => {
 console.log("data", data);

      /** GET SESSION TOKEN */
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
            try{
                const post = await axios({
                  method: 'POST',
                  url: `${baseurl.URL}${url}`,
                  headers: {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'X-CSRF-Token' : token.data
                  },
                  data: JSON.stringify(data)
                })
                console.log(post)
                return post;
            }catch(err){
              console.log("Post Error: ",err)
            }
      }catch(error){
        console.log("Session token error: ",error)
      }



}