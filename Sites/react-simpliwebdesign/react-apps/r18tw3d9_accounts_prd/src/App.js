import {
  BrowserRouter, 
  Routes, 
  Route} from 'react-router-dom';

/** Layout */  
import Layout from './pages/Layout';

/** Pages */ 
import Home from './pages/Home';
import Invoice from './pages/Invoice';
import Rent from './pages/Rent';
import Print from './pages/Print';
import Client from './pages/Client';



function App() {

  return (  
    <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/print/:id" element={<Print />} />
        <Route path="/client" element={<Client />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
