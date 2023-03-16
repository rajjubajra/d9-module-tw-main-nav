import Remote from './Remote';
import Local from './Local';
import {useSelector} from 'react-redux';

function Invoice() {


  const {fiscal_year_start, fiscal_year_end} = useSelector(state => state.set_fiscalyear);
  console.log("FISCAL YEAR : ",fiscal_year_start, fiscal_year_end)

  return (
    <div className="mt-0">      

      {window.location.origin === 'http://localhost:3000'
      ? <Local />
      : <Remote />}
    </div>
  )
}

export default Invoice