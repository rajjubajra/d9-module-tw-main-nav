import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center max-w-screen-xl m-auto h-screen">
        <h1 className="text-6xl">T-Shirt Store</h1>
        <Home />
      </div>
    </div>
  );
}

export default App;