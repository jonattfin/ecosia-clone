import { configure } from '@storybook/react';

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

function loadStories() {
  const req = require.context('../src', true, /stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
