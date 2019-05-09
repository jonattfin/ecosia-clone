import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import HomeComponent from "./homeComponent";

const props = {
  model: {
    payload: {
      numberOfSearches: 0,
      data: [],
      searchInProgress: false
    },
  },
  actions: {
    search: action('search')
  }
}

storiesOf('home', module)
  .add('index', () => <HomeComponent {...props} />)
