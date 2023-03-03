import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {
  reducerMainNav, 
  reducerBlog,
  reducerTaxonomy,
  reducerBlogYearMonth
  
} from './Reducer';

const reducer = combineReducers(
  {
    // reducerFetchData,
    reducerMainNav,
    reducerBlog,
    reducerTaxonomy,
    reducerBlogYearMonth
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);
