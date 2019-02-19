import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link, 
  Switch
} from 'react-router-dom'

const Home = lazy(() => import('./home'));

// import logo from './logo.svg';

export default () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>

      <hr />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </div>
  </Router>
)
