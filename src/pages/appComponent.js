import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'


import { Header } from '../components';

import styles from './styles.module.scss';

const Home = lazy(() => import('./home'));
const AboutUs = lazy(() => import('./aboutUs'));




export default (props) => (
  <Router>
    <div className={styles.app}>
      <Header {...props} />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutUs" component={AboutUs} />
        </Switch>
      </Suspense>
    </div>
  </Router>
)
