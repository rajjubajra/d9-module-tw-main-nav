import React,{useState, useEffect} from 'react';
/** DATA FROM json file  */
import plandataLocal from '../../data/plan.json';
import fydataLocal from '../../data/fiscalyear.json';
import groupdataLocal from '../../data/dataType.json';
/** components */
import Loading from '../../components/Loading';
import BtnClose from '../../components/BtnClose';
import Component from './Component';
import FiscalYear from './FiscalYear';
import GroupList from './GroupList';
/** Hooks */
import useFetch from '../../hooks/useFetch';
import useNormalisation from '../../hooks/userNormalisation';
// import useFiscalYear from '../../hooks/useFiscalYear';
// import useGroupList from '../../hooks/useGroupList';



function Report() {

  const baseurl = "https://dev.yellow-website.com/yw-d9";

  /** FETCH : PLAN 
   * @param url : remote url (dev.yellow-website.com/yw-d9)
   * @param plandataLocal: local json file (for localhost:3000 test site)
   */
  const [groupId, setGroupId] = useState(null);

  const urlforAll = `${baseurl}/jsonapi/node/demo_data_entry?include=field_demo_data_financial_year,field_demo_data_type&sort=nid`;

  const filterByGroupUrl = `${baseurl}/jsonapi/node/demo_data_entry?filter[field_demo_data_type.id][value]=${groupId}&include=field_demo_data_financial_year,field_demo_data_type&sort=nid`;

  console.log(filterByGroupUrl);
  
  const [url, setUrl] = useState(urlforAll);
  useEffect(()=>{
    groupId === null ? setUrl(urlforAll) : setUrl(filterByGroupUrl)
  },[filterByGroupUrl, groupId, urlforAll])
  console.log("GROUP ID ",groupId);
  const {
    data:planData, 
    loading:planLoading, 
    error:planError} = useFetch(url, plandataLocal)
  /** Custom-Hook : NORMALIZED JSON DATA */
  const {data} = useNormalisation(planData);
  console.log("NORMALISED DATA: ",data);

  //console(filterByGroupUrl);

  /** FETCH FISCAL YEAR 
   * @param fyurl : remote url (dev.yellow-website.com/yw-d9);
   * @param fydataLocal : local json file ( for localhost:3000 test site);
  */ 
  const fyurl = `${baseurl}/jsonapi/taxonomy_term/demo_data_financial_year`;
  const {
      data: fyData,
      loading: fyLoading, 
      error: fyError
  } = useFetch(fyurl, fydataLocal);
  //console.log("FISCAL YEAR LIST : ",fyData);

  /** FETCH GROUP LIST 
   * @param groupUrl : remote url (dev.yellow-website.com/yw-d9)
   * @param groupdataLocal : local json file ( for localhost:3000 test site)
  */
  const groupUrl = `${baseurl}/jsonapi/taxonomy_term/demo_data_type`;
  const {
    data: groupData,
    loading: groupLoading,
    error: groupError
  } = useFetch(groupUrl, groupdataLocal);
  console.log("GROUP LIST: ",groupData);


  function handleGroup(id){
    //console.log("Handle Goupr", id);
    setGroupId(id);
    id === null ? setUrl(url) : setUrl(filterByGroupUrl);
  }


  console.log(planLoading, fyLoading, groupLoading);

  if(planLoading || fyLoading || groupLoading) return <Loading />
  if(planError || fyError || groupError) return console.log("error:", planError, fyError, groupError);
  if(data.length < 1) return <div>Data Not found</div> 
  return (
    <div>
    {/** close button nav to homepage */}
    <BtnClose />

    {/** GROUP LIST ROW */}
    <div className="my-4">
      <GroupList data={groupData} handleGroup={handleGroup} />
    </div>


    {/** FISCAL YEAR ROW ON TITLE */}
    <div>
      <FiscalYear data={fyData} />
    </div>


    {/** REPORT COMPONENTS */}
    <div className="flex">
      <div>
        <Component data={data} year="2021-2022" />
      </div>
      <div>
        <Component data={data} year="2022-2023" />
      </div>
      <div>
        <Component data={data} year="2023-2024" />
      </div>
      <div>
        <Component data={data} year="2024-2025" />
      </div>
      <div>
        <Component data={data} year="2025-2026" />
      </div>
    </div>

  </div>  

  )
}

export default Report
