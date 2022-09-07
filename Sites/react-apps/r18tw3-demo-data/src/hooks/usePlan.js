import {useState, useEffect} from 'react';

const usePlan = (plan) => {

  //console.log(plan.data)
  

  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(null);

  /** GET Financial Year from include */
  const getTaxonomy = (id) => {
    const index = plan?.included?.findIndex((inc)=> inc.id === id);
    //console.log("index : ",index);
    return index >= 0 && plan?.included[index].attributes.name;
  }

  const regex = "/(<([^>]+)>)/ig";


  /** data normalization */
  const normalization = (plan) => {

      const arr = [];
      plan?.data?.length > 0 &&
      plan?.data?.map((item)=> {
        const {field_demo_data_milestone_date, field_demo_data_milestone_update, field_demo_data_objective, field_demo_data_rag} = item.attributes;
        const {field_demo_data_financial_year, field_demo_data_type } = item.relationships;
        //console.log("FY: ",field_demo_data_financial_year?.data?.id)
        return arr.push({
          "id": item.id,
          "mildstone_date": field_demo_data_milestone_date,
          "mildstone_update": field_demo_data_milestone_update?.value,
          "objective": field_demo_data_objective?.value,
          "data_rag": field_demo_data_rag,
          "fiscal_year" : getTaxonomy(field_demo_data_financial_year?.data?.id),
          "data_type": getTaxonomy(field_demo_data_type?.data?.id)
        })
      })
      return setData(arr);
  }
  

  useEffect(()=>{
    setLoding(true);
    normalization(plan)
    setLoding(false)
  },[plan])
  
  //console.log(data);
  return {data, loading, error}


}

export default usePlan