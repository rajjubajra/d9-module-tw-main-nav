import {BrowserRouter, Routes, Route} from 'react-router-dom';

/** page layout */
import Layout from './components/Layout';

/** Pages */
import Home from './pages/Home';
import Report from './pages/Report';

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
