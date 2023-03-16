import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter,
          RouterProvider
        } from 'react-router-dom';
//components
import './index.css';
import Root from './Root';
import Pages from './pages/Pages';
import Error from './routes/Error';
import Articles, {loader as articlesLoader} from './pages/article/view/Articles';
import Article, {loader as articleLoader} from './pages/article/view/Article';
import NewPostForm from './pages/article/post/NewPostForm';
import NewPost,{action as newPostAction} from './pages/article/post/NewPost';
import UpdatePost,{ loader as updateLoader, action as updateAction } from './pages/article/update/UpdatePost';
import DeleteArticle,{loader as deleteLoader} from './pages/article/delete/DeleteArticle';
import {action as destroyAction} from './pages/article/delete/destroy';


const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        { 
          index: true,
          element: <Pages />
        },
        {
          path: '/articles',
          element: <Articles />,
          loader: articlesLoader,
        },
        {
          path: '/article/:uuid',
          element: <Article />,
          loader: articleLoader,
        },
        {
          path: '/new-article',
          element: <NewPostForm />,
        },
        {
          path: '/article/new',
          element: <NewPost />,
          action: newPostAction,
        },
        {
          path: '/article/update/:uuid',
          element: <UpdatePost />,
          loader: updateLoader,
          action: updateAction,
        },
        {
          path: '/article/delete/:uuid',
          element: <DeleteArticle />,
          loader: deleteLoader,
        },
        {
          path: '/article/delete/:uuid/destroy',
          action: destroyAction,
        },
      
      ]
    }


])



// const router = createBrowserRouter(createRoutesFromElements(

//     <Route element={<Root />} path="/" errorElement={<Error />} >

//       <Route index element={<Pages />} />
//       <Route path="/article" element={<Article />}  loader={articleLoader} />
//       <Route path="/new-article" element={<NewPostForm />}  />
//       <Route path="/article/new" element={<NewPost />} action={newPostAction} />
//       <Route 
//           path='/article/update/:uuid' 
//           element={<UpdatePost />} 
//           loader={updateLoader} />
//     </Route>

// )); 




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);
