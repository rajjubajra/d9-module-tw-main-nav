import Menu001 from "./menu001";
import data from './data.json';

function NavigationMenu() {
  return (
    <div>
      <div>
        <span className="section">Navigation menu - 001</span>
        <Menu001  data={data} />
      </div>
      
    </div>
  )
}

export default NavigationMenu
