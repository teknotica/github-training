import { configure } from '@storybook/react';

const componentStories = require.context('../src', true, /\.story\.js$/);

const loadStories = () => {
  componentStories.keys().forEach(filename => componentStories(filename));
};

configure(loadStories, module);