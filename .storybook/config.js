import { configure } from '@storybook/react';

// import Provider from './provider';

// addDecorator((story) => (
//   <Provider story={story()} />
// ));

function loadStories() {
  const req = require.context('../src', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);