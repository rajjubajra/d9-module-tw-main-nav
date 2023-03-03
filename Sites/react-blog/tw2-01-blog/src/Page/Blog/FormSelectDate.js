import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionSetYearMonth} from '../../Redux/Action'

function FormSelectDate() {

  const state = useSelector(state => state.reducerBlog.blog_data);
  const [month, setMonth] = useState([]);
  const [year, setYear] = useState([]);
  const [selectedYear, setSelectedYear] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  
  /** SEARCH PROCEDURE
    1 - Select availeble Year
    2 - Create month-array based on selected year so that only availabel month dropdown is available
    3 - Once Yeare and Month is selected pass Year-Month to Redux Reducer variable
   */

  /** CAREATE year ARRAY AND UPDATE selectedYear */
  useEffect(()=>{
    const yr = [];
    state && state.map(item => {
      let blog_yr = new Date(item.created).getFullYear();
      yr.push(blog_yr);
      /** create new Array removing duplicate Year */
      let unqYr =  [...new Set(yr)];
      /** SET AVAILABLE YEAR FOR THE BLOG SELECTION */
      setYear(unqYr);
    })
  },[state])


  /** CAREATE month ARRAY AND UPDATE selectedMonth */
  useEffect(()=>{
    const mn= [];
    selectedYear &&
    state && state.map(item => {
      let blog_yr = new Date(item.created).getFullYear();
      let blog_mn = new Date(item.created).getMonth();
  
      if( parseInt(selectedYear) === blog_yr){
        mn.push(blog_mn);
      }
      /** Create month Array Removing duplicate months */
      let unqMn = [...new Set(mn)];
      /** SET AVAILABLE MONTH FOR THE BLOG SELECTION */
      setMonth(unqMn);
    })
  },[selectedYear, state])


  const dispatch = useDispatch();
  useEffect(()=>{
    let YearMonth = `${selectedYear}-${selectedMonth}`;
    if(selectedYear && selectedMonth){
      dispatch(actionSetYearMonth(YearMonth));
    } 
  },[selectedMonth, selectedYear, year, month, dispatch])

  console.log(selectedYear, selectedMonth);

  /** Month Name array */
  const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  

  return (
    <form>
      <select onChange={(e)=> setSelectedYear(e.target.value)}>
      <option>-- Year --</option> 
      {
        year.map((item, index)=>{
          return (<option key={index} value={item}>{item}</option>)
        })
      }     
      </select>    

      <select onChange={(e)=> setSelectedMonth(e.target.value)}>
        <option>-- Month --</option>
        {
          month.length > 0 ?
          month.map((item,index)=>{
            return <option key={index} value={item}>{monthArr[item]}</option>
          })
          : <option>- Select Year -</option>
        }
      </select>
    </form>
  )
}

export default FormSelectDate
