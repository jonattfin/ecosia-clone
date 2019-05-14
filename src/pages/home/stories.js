import React from 'react';

import { storiesOf } from '@storybook/react';

import Component from './homeComponent';

const model = {
  payload: {}
}

storiesOf('home', module)
  .add('Component', () => <Component model={model} />);
