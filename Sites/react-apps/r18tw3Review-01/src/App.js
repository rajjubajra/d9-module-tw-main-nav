import {BrowserRouter, Route, Routes} from 'react-router-dom';



//page and layout import
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import ReviewDetails from './pages/ReviewDetails';
// import Category from './pages/Category';
// import PostReview from './pages/PostReview';
// import ReviewEdit from './pages/ReviewEdit';
import Login from './pages/Login';



function App() {
  return (
    
    <BrowserRouter>
    <Layout>
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<ReviewDetails />} />
        <Route path="/login" element={<Login />} />
        {/*
        <Route path="/details/:id" element={<ReviewDetails />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/post-review" element={<PostReview />} />
        <Route path="/edit-review/:id" element={<ReviewEdit />} /> */}
      </Routes>
    </div>
    </Layout>
    </BrowserRouter>
    
  );
}

export default App;
