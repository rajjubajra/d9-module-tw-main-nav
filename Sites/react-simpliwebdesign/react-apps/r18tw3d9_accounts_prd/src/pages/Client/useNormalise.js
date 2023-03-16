import {useEffect, useState} from 'react';
import {city} from './normalise/city';
import {country} from './normalise/country';
import {postcode} from './normalise/postcode';



function useNormalise(clients){

  //console.log(clients);
  const [data, setData] = useState([]);

  useEffect(()=>{

      const arr = [];
      
      clients?.data?.map((item) => {
        const { drupal_internal__nid,
                field_client_s_address_line_1,
                field_client_s_address_line_2,
                field_client_s_contact_person,
                field_client_s_email,
                field_client_s_name,
                field_client_s_tel
              } = item.attributes
        const { 
                field_client_s_city,
                field_client_s_country_name,
                field_client_s_post_code,
              } = item.relationships
        return arr.push({ 
            "id": item.id,
            "nodeId": drupal_internal__nid,
            "addLine1" : field_client_s_address_line_1,
            "addLine2" : field_client_s_address_line_2,
            "client_name": field_client_s_name,
            "client_email": field_client_s_email,
            "client_tel":field_client_s_tel,
            "city": city(field_client_s_city?.data?.id, clients.included),
            "country": country(field_client_s_country_name?.data?.id, clients.included),
            "postcode": postcode(field_client_s_post_code?.data?.id, clients.included),
            "contact_person": field_client_s_contact_person?.value,
          })
      })

    setData(arr);

  },[clients])


  return {data}

}
export default useNormalise;