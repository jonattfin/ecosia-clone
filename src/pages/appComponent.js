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
const Mobile = lazy(() => import('./mobile'));

export default (props) => (
  <Router>
    <div className={styles.app}>
      <Header {...props} />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/mobile" component={Mobile} />
        </Switch>
      </Suspense>
    </div>
  </Router>
)
