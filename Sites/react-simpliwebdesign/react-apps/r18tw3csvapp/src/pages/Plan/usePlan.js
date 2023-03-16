import {useState, useEffect} from 'react';
/** hook */
import useFetch from '../../hooks/useFetch';
/** data from local json file */
import datalocal from '../../data/plan.json';

const usePlan = (typeId) => {


  console.log(typeId);
  const urlByType = `https://dev.yellow-website.com/yw-d9/jsonapi/node/demo_data_entry?filter[field_demo_data_type.id][value]=${typeId}&include=field_demo_data_financial_year,field_demo_data_type&sort=nid`;

  const urlForAll = `https://dev.yellow-website.com/yw-d9/jsonapi/node/demo_data_entry?include=field_demo_data_financial_year,field_demo_data_type&sort=nid`

  const [url, setUrl] = useState(urlForAll);

  useEffect(()=>{

    return typeId === null ? setUrl(urlForAll) : setUrl(urlByType);

  },[typeId, urlByType, urlForAll])


  /** Hook: Fetch Data */
  const {data:planData, loading:planLoading, error:planError} = useFetch(url, datalocal);

  console.log("Plan Data : ", planData);

  /** planned data state and loading state */
  const [data, setData] = useState([]);

  useEffect(()=>{    

        /** GET Financial Year from include */
      const getTaxonomyName = (id) => {
        const index = planData?.included?.findIndex((inc)=> inc.id === id);
        //console.log("index : ",index);
        return index >= 0 && planData?.included[index].attributes.name;
      }
      /** GET TAXONOMY ID */
      const getTaxonomyId = (id) => {
        const index = planData?.included?.findIndex((inc)=> inc.id === id);
        //console.log("index : ",index);
        return index >= 0 && planData?.included[index].attributes.drupal_internal__tid;
      }

     /** DATA NORMALIZED */
    const arr = [];
    planData?.data?.length > 0 &&
    planData?.data?.map((item)=> {
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
    return setData(arr);
  
  },[planData])
  
  //console.log(data);
  return {data, planLoading, planError}
  
}

export default usePlan