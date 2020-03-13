import { configure } from '@storybook/html';
import { addParameters } from '@storybook/html';

const customViewports = {
  extraSmall: {
    name: 'Extra Small',
    styles: {
      height: '992px',
      width: '530px',
    },
    type: 'mobile',
  },
  small: {
    name: 'Small',
    styles: {
      height: '1125px',
      width: '633px',
    },
    type: 'tablet',
  },
  medium: {
    name: 'Medium',
    styles: {
      height: '1125px',
      width: '833px',
    },
    type: 'desktop',
  },
  large: {
    name: 'Large',
    styles: {
      height: '1200px',
      width: '1110px',
    },
    type: 'desktop',
  },
  extraLarge: {
    name: 'Extra Large',
    styles: {
      height: '1200px',
      width: '1242px',
    },
    type: 'desktop',
  },
};

addParameters({
  viewport: { viewports: customViewports },
});

configure(require.context('../src/components', true, /\.stories\.js$/), module);
