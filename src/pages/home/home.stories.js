import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import HomeComponent from "./homeComponent";
import HomeContainer from "./";

const model = {
  payload: {
    numberOfSearches: 0,
    data: [],
    searchInProgress: false
  }
}

storiesOf('home', module)
  .add('component', () => <HomeComponent model={model} />)
  .add('container', () => <HomeContainer />)
