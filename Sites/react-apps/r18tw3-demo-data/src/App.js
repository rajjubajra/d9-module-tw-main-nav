import {BrowserRouter, Routes, Route} from 'react-router-dom';
/** Pages */
import Home from './pages/Home';
import Plan from './pages/Plan';

function App() {
  return (
    <div className="bg-gray-300 p-10">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
