import axios from "axios";
import {baseurl} from '../config';


export async function fetchRemote(url){
  console.log("base url : ",baseurl.URL + url)
  try{
    const response = await axios({
        method: 'GET',
        url: baseurl.URL + url + '?sort=-created',
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
        }
    })
    console.log(response.data);
    console.log(Object.values(response.data.data));
    return Object.values(response.data.data)
  }catch(error){
    console.log(error)
  }
}

export async function fetchRemoteOne(url){
  console.log("base url : ",baseurl.URL + url)
  try{
    const response = await axios({
        method: 'GET',
        url: baseurl.URL + url,
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
        }
    })
    console.log(response.data);
    return response.data.data
  }catch(error){
    console.log(error)
  }
}

export async function fetchLocal(url){
  console.log("base url : ",baseurl.URL + url)
  try{
    const response = await axios({
        method: 'GET',
        url: baseurl.URL + url,
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
        }
    })
    console.log(response.data);
    return response.data;
  }catch(error){
    console.log(error)
  }
}

export async function fetchLocalOne(url){
  console.log("base url : ",baseurl.URL + url)
  try{
    const response = await axios({
        method: 'GET',
        url: baseurl.URL + url,
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
        }
    })
    console.log(response.data[0]);
    return response.data[0];
  }catch(error){
    console.log(error)
  }
}