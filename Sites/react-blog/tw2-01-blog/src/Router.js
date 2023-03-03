import { Route, Switch} from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Blog from './Page/Blog';

import BlogPost from './Page/BlogPost';
import BlogListByTaxonomy from './Page/BlogListByTaxonomy';
import BlogSearch from './Page/BlogSearch';
import {baseurl_nav} from './config/baseurl';



function Router() {


  return (
      <Switch>
        <Route exact path={`${baseurl_nav.URL}`}  component={Home} />
        <Route path={`${baseurl_nav.URL}/about`}  component={About} />
        <Route path={`${baseurl_nav.URL}/contact`} component={Contact} />
        <Route path={`${baseurl_nav.URL}/blog`}component={Blog} />
        <Route path={`${baseurl_nav.URL}/blog-post/:nid`} component={BlogPost} />
        <Route path={`${baseurl_nav.URL}/blogs-by-tag/:tid`} component={BlogListByTaxonomy} />
        <Route path={`${baseurl_nav.URL}/blog-search`} component={BlogSearch} />
      </Switch>
  )
}

export default Router
