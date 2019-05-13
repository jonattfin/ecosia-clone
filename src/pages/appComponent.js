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
const HowItWorks = lazy(() => import('./howItWorks'));
const Privacy = lazy(() => import('./privacy'));

export default (props) => (
  <Router>
    <div className={styles.app}>
      <Header {...props} />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/how-it-works" component={HowItWorks} />
          <Route exact path="/mobile" component={Mobile} />
          <Route exact path="/privacy" component={Privacy} />
        </Switch>
      </Suspense>
    </div>
  </Router>
)
