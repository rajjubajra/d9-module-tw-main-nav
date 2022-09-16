import {useEffect, useState} from 'react';


function useNormalise(rawdata){

  const [data, setData] = useState([]);


  useEffect(()=>{

    /** GET Financial Year from include */
        const getTaxonomyName = (id) => {
          const index = rawdata?.included?.findIndex((inc)=> inc.id === id);
          //console.log("index : ",index);
          return index >= 0 && rawdata?.included[index].attributes.name;
        }
    /** GET TAXONOMY ID */
        const getTaxonomyId = (id) => {
          const index = rawdata?.included?.findIndex((inc)=> inc.id === id);
          //console.log("index : ",index);
          return index >= 0 && rawdata?.included[index].attributes.drupal_internal__tid;
        }
    /** DATA NORMALIZED */
    const arr = [];
    rawdata?.data?.length > 0 &&
    rawdata?.data?.map((item)=> {
      const {title,field_demo_data_milestone_date, field_demo_data_milestone_update, field_demo_data_objective, field_demo_data_rag,drupal_internal__nid} = item.attributes;
      const {field_demo_data_financial_year, field_demo_data_type } = item.relationships;
      //console.log("FY: ",field_demo_data_financial_year?.data?.id)
      return arr.push({
        "id": item.id,
        "nid": drupal_internal__nid,
        "title": title,
        "mildstone_date": field_demo_data_milestone_date,
        "mildstone_update": field_demo_data_milestone_update?.value,
        "objective": field_demo_data_objective?.value,
        "data_rag": field_demo_data_rag,
        "fiscal_year" : getTaxonomyName(field_demo_data_financial_year?.data?.id),
        "data_type": getTaxonomyName(field_demo_data_type?.data?.id),
        "data_type_id" : getTaxonomyId(field_demo_data_type?.data?.id)
      })
    })

    setData(arr);

  },[rawdata])


  return {data}

}

export default useNormalise;