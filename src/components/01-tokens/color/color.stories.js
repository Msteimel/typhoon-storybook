import { storiesOf } from '@storybook/html';
import Color from './color.twig';
import { withA11y } from '@storybook/addon-a11y';

import '@scss/style.scss';

// Create random data
// https://github.com/marak/Faker.js/#api-methods
import Faker from 'faker';

export default { title: 'Tokens/Color', decorators: [withA11y] };

const stories = storiesOf('Tokens/Color', module).addDecorator(withA11y);

stories.add('Primary', () =>
  Color({
    colorPalette: [
      {
        colorStatus: 'Primary',
        colors: [
          {
            name: 'Red-50',
            tokenValue: 'red-50',
            hsla: 'hsla(360, 94, 98, 1)',
            text: '.lib-text-red-50',
            background: '.lib-bg-red-50',
            textColor: '',
          },
          {
            name: 'Red-100',
            tokenValue: 'red-100',
            hsla: 'hsla(360, 94, 95, 1)',
            text: '.lib-text-red-100',
            background: '.lib-bg-red-100',
            textColor: '',
          },
          {
            name: 'Red-200',
            tokenValue: 'red-200',
            hsla: 'hsla(358, 86, 82, 1)',
            text: '.lib-text-red-200',
            background: '.lib-bg-red-200',
            textColor: '',
          },
          {
            name: 'Red-300',
            tokenValue: 'red-300',
            hsla: 'hsla(358, 82, 67, 1)',
            text: '.lib-text-red-300',
            background: '.lib-bg-red-300',
            textColor: '',
          },
          {
            name: 'Red-400',
            tokenValue: 'red-400',
            hsla: 'hsla(357, 74, 56, 1)',
            text: '.lib-text-red-400',
            background: '.lib-bg-red-400',
            textColor: 'lib-text-white',
          },
          {
            name: 'Red-500',
            tokenValue: 'red-500',
            hsla: 'hsla(350, 85, 42, 1)',
            text: '.lib-text-red-500',
            background: '.lib-bg-red-500',
            textColor: 'lib-text-white',
          },
          {
            name: 'Red-600',
            tokenValue: 'red-600',
            hsla: 'hsla(350, 82, 38, 1)',
            text: '.lib-text-red-600',
            background: '.lib-bg-red-600',
            textColor: 'lib-text-white',
          },
          {
            name: 'Red-700',
            tokenValue: 'red-700',
            hsla: 'hsla(350, 79, 32, 1)',
            text: '.lib-text-red-700',
            background: '.lib-bg-red-700',
            textColor: 'lib-text-white',
          },
          {
            name: 'Red-800',
            tokenValue: 'red-800',
            hsla: 'hsla(350, 85, 26, 1)',
            text: '.lib-text-red-800',
            background: '.lib-bg-red-800',
            textColor: 'lib-text-white',
          },
          {
            name: 'Red-900',
            tokenValue: 'red-900',
            hsla: 'hsla(348, 90, 20, 1)',
            text: '.lib-text-red-900',
            background: '.lib-bg-red-900',
            textColor: 'lib-text-white',
          },
        ],
      },
    ],
  })
);

stories.add('Secondary', () =>
  Color({
    colorPalette: [
      {
        colorStatus: 'Secondary',
        colors: [
          {
            name: 'Yellow-50',
            tokenValue: 'yellow-50',
            hsla: 'hsla(50, 99, 96, 1)',
            text: '.lib-text-yellow-50',
            background: '.lib-bg-yellow-50',
            textColor: '',
          },
          {
            name: 'Yellow-100',
            tokenValue: 'yellow-100',
            hsla: 'hsla(50, 99, 92, 1)',
            text: '.lib-text-yellow-100',
            background: '.lib-bg-yellow-100',
            textColor: '',
          },
          {
            name: 'Yellow-200',
            tokenValue: 'yellow-200',
            hsla: 'hsla(52, 96, 85, 1)',
            text: '.lib-text-yellow-200',
            background: '.lib-bg-yellow-200',
            textColor: '',
          },
          {
            name: 'Yellow-300',
            tokenValue: 'yellow-300',
            hsla: 'hsla(50, 96, 75, 1)',
            text: '.lib-text-yellow-300',
            background: '.lib-bg-yellow-300',
            textColor: '',
          },
          {
            name: 'Yellow-400',
            tokenValue: 'yellow-400',
            hsla: 'hsla(46, 96, 70, 1)',
            text: '.lib-text-yellow-400',
            background: '.lib-bg-yellow-400',
            textColor: '',
          },
          {
            name: 'Yellow-500',
            tokenValue: 'yellow-500',
            hsla: 'hsla(42, 86, 61, 1)',
            text: '.lib-text-yellow-500',
            background: '.lib-bg-yellow-500',
            textColor: '',
          },
          {
            name: 'Yellow-600',
            tokenValue: 'yellow-600',
            hsla: 'hsla(41, 91, 49, 1)',
            text: '.lib-text-yellow-600',
            background: '.lib-bg-yellow-600',
            textColor: '',
          },
          {
            name: 'Yellow-700',
            tokenValue: 'yellow-700',
            hsla: 'hsla(30, 98, 41, 1)',
            text: '.lib-text-yellow-700',
            background: '.lib-bg-yellow-700',
            textColor: '',
          },
          {
            name: 'Yellow-800',
            tokenValue: 'yellow-800',
            hsla: 'hsla(26, 97, 30, 1)',
            text: '.lib-text-yellow-800',
            background: '.lib-bg-yellow-800',
            textColor: 'lib-text-white',
          },
          {
            name: 'Yellow-900',
            tokenValue: 'yellow-900',
            hsla: 'hsla(15, 96, 19, 1)',
            text: '.lib-text-yellow-900',
            background: '.lib-bg-yellow-900',
            textColor: 'lib-text-white',
          },
        ],
      },
    ],
  })
);

stories.add('Accent', () =>
  Color({
    colorPalette: [
      {
        colorStatus: 'Accent',
        colors: [
          {
            name: 'Blue-50',
            tokenValue: 'blue-50',
            hsla: 'hsla(50, 99, 96, 1)',
            text: '.lib-text-blue-50',
            background: '.lib-bg-blue-50',
            textColor: '',
          },
          {
            name: 'Blue-100',
            tokenValue: 'blue-100',
            hsla: 'hsla(50, 99, 92, 1)',
            text: '.lib-text-blue-100',
            background: '.lib-bg-blue-100',
            textColor: '',
          },
          {
            name: 'Blue-200',
            tokenValue: 'blue-200',
            hsla: 'hsla(52, 96, 85, 1)',
            text: '.lib-text-blue-200',
            background: '.lib-bg-blue-200',
            textColor: '',
          },
          {
            name: 'Blue-300',
            tokenValue: 'blue-300',
            hsla: 'hsla(50, 96, 75, 1)',
            text: '.lib-text-blue-300',
            background: '.lib-bg-blue-300',
            textColor: '',
          },
          {
            name: 'Blue-400',
            tokenValue: 'blue-400',
            hsla: 'hsla(46, 96, 70, 1)',
            text: '.lib-text-blue-400',
            background: '.lib-bg-blue-400',
            textColor: '',
          },
          {
            name: 'Blue-500',
            tokenValue: 'blue-500',
            hsla: 'hsla(42, 86, 61, 1)',
            text: '.lib-text-blue-500',
            background: '.lib-bg-blue-500',
            textColor: '',
          },
          {
            name: 'Blue-600',
            tokenValue: 'blue-600',
            hsla: 'hsla(41, 91, 49, 1)',
            text: '.lib-text-blue-600',
            background: '.lib-bg-blue-600',
            textColor: 'lib-text-white',
          },
          {
            name: 'Blue-700',
            tokenValue: 'blue-700',
            hsla: 'hsla(30, 98, 41, 1)',
            text: '.lib-text-blue-700',
            background: '.lib-bg-blue-700',
            textColor: 'lib-text-white',
          },
          {
            name: 'Blue-800',
            tokenValue: 'blue-800',
            hsla: 'hsla(26, 97, 30, 1)',
            text: '.lib-text-blue-800',
            background: '.lib-bg-blue-800',
            textColor: 'lib-text-white',
          },
          {
            name: 'Blue-900',
            tokenValue: 'blue-900',
            hsla: 'hsla(15, 96, 19, 1)',
            text: '.lib-text-blue-900',
            background: '.lib-bg-blue-900',
            textColor: 'lib-text-white',
          },
        ],
      },
    ],
  })
);

stories.add('Neutral', () =>
  Color({
    colorPalette: [
      {
        colorStatus: 'Warm Grey',
        colors: [
          {
            name: 'Warm Grey-50',
            tokenValue: 'warm-grey-50',
            hsla: 'hsla(50, 99, 96, 1)',
            text: '.lib-text-warm-grey-50',
            background: '.lib-bg-warm-grey-50',
            textColor: '',
          },
          {
            name: 'Warm Grey-100',
            tokenValue: 'warm-grey-100',
            hsla: 'hsla(50, 99, 92, 1)',
            text: '.lib-text-warm-grey-100',
            background: '.lib-bg-warm-grey-100',
            textColor: '',
          },
          {
            name: 'Warm Grey-200',
            tokenValue: 'warm-grey-200',
            hsla: 'hsla(52, 96, 85, 1)',
            text: '.lib-text-warm-grey-200',
            background: '.lib-bg-warm-grey-200',
            textColor: '',
          },
          {
            name: 'Warm Grey-300',
            tokenValue: 'warm-grey-300',
            hsla: 'hsla(50, 96, 75, 1)',
            text: '.lib-text-warm-grey-300',
            background: '.lib-bg-warm-grey-300',
            textColor: '',
          },
          {
            name: 'Warm Grey-400',
            tokenValue: 'warm-grey-400',
            hsla: 'hsla(46, 96, 70, 1)',
            text: '.lib-text-warm-grey-400',
            background: '.lib-bg-warm-grey-400',
            textColor: '',
          },
          {
            name: 'Warm Grey-500',
            tokenValue: 'warm-grey-500',
            hsla: 'hsla(42, 86, 61, 1)',
            text: '.lib-text-warm-grey-500',
            background: '.lib-bg-warm-grey-500',
            textColor: 'lib-text-white',
          },
          {
            name: 'Warm Grey-600',
            tokenValue: 'warm-grey-600',
            hsla: 'hsla(41, 91, 49, 1)',
            text: '.lib-text-warm-grey-600',
            background: '.lib-bg-warm-grey-600',
            textColor: 'lib-text-white',
          },
          {
            name: 'Warm Grey-700',
            tokenValue: 'warm-grey-700',
            hsla: 'hsla(30, 98, 41, 1)',
            text: '.lib-text-warm-grey-700',
            background: '.lib-bg-warm-grey-700',
            textColor: 'lib-text-white',
          },
          {
            name: 'Warm Grey-800',
            tokenValue: 'warm-grey-800',
            hsla: 'hsla(26, 97, 30, 1)',
            text: '.lib-text-warm-grey-800',
            background: '.lib-bg-warm-grey-800',
            textColor: 'lib-text-white',
          },
          {
            name: 'Warm Grey-900',
            tokenValue: 'warm-grey-900',
            hsla: 'hsla(15, 96, 19, 1)',
            text: '.lib-text-warm-grey-900',
            background: '.lib-bg-warm-grey-900',
            textColor: 'lib-text-white',
          },
        ],
      },
      {
        colorStatus: 'Grey',
        colors: [
          {
            name: 'Grey-50',
            tokenValue: 'grey-50',
            hsla: 'hsla(50, 99, 96, 1)',
            text: '.lib-text-grey-50',
            background: '.lib-bg-grey-50',
            textColor: '',
          },
          {
            name: 'Grey-100',
            tokenValue: 'grey-100',
            hsla: 'hsla(50, 99, 92, 1)',
            text: '.lib-text-grey-100',
            background: '.lib-bg-grey-100',
            textColor: '',
          },
          {
            name: 'Grey-200',
            tokenValue: 'grey-200',
            hsla: 'hsla(52, 96, 85, 1)',
            text: '.lib-text-grey-200',
            background: '.lib-bg-grey-200',
            textColor: '',
          },
          {
            name: 'Grey-300',
            tokenValue: 'grey-300',
            hsla: 'hsla(50, 96, 75, 1)',
            text: '.lib-text-grey-300',
            background: '.lib-bg-grey-300',
            textColor: '',
          },
          {
            name: 'Grey-400',
            tokenValue: 'grey-400',
            hsla: 'hsla(46, 96, 70, 1)',
            text: '.lib-text-grey-400',
            background: '.lib-bg-grey-400',
            textColor: '',
          },
          {
            name: 'Grey-500',
            tokenValue: 'grey-500',
            hsla: 'hsla(42, 86, 61, 1)',
            text: '.lib-text-grey-500',
            background: '.lib-bg-grey-500',
            textColor: 'lib-text-white',
          },
          {
            name: 'Grey-600',
            tokenValue: 'grey-600',
            hsla: 'hsla(41, 91, 49, 1)',
            text: '.lib-text-grey-600',
            background: '.lib-bg-grey-600',
            textColor: 'lib-text-white',
          },
          {
            name: 'Grey-700',
            tokenValue: 'grey-700',
            hsla: 'hsla(30, 98, 41, 1)',
            text: '.lib-text-grey-700',
            background: '.lib-bg-grey-700',
            textColor: 'lib-text-white',
          },
          {
            name: 'Grey-800',
            tokenValue: 'grey-800',
            hsla: 'hsla(26, 97, 30, 1)',
            text: '.lib-text-grey-800',
            background: '.lib-bg-grey-800',
            textColor: 'lib-text-white',
          },
          {
            name: 'Grey-900',
            tokenValue: 'grey-900',
            hsla: 'hsla(15, 96, 19, 1)',
            text: '.lib-text-grey-900',
            background: '.lib-bg-grey-900',
            textColor: 'lib-text-white',
          },
        ],
      },
    ],
  })
);

stories.add('Support', () =>
  Color({
    colorPalette: [
      {
        colorStatus: 'Support',
        colors: [
          {
            name: 'Green-50',
            tokenValue: 'green-50',
            hsla: 'hsla(50, 99, 96, 1)',
            text: '.lib-text-green-50',
            background: '.lib-bg-green-50',
            textColor: '',
          },
          {
            name: 'Green-100',
            tokenValue: 'green-100',
            hsla: 'hsla(50, 99, 92, 1)',
            text: '.lib-text-green-100',
            background: '.lib-bg-green-100',
            textColor: '',
          },
          {
            name: 'Green-200',
            tokenValue: 'green-200',
            hsla: 'hsla(52, 96, 85, 1)',
            text: '.lib-text-green-200',
            background: '.lib-bg-green-200',
            textColor: '',
          },
          {
            name: 'Green-300',
            tokenValue: 'green-300',
            hsla: 'hsla(50, 96, 75, 1)',
            text: '.lib-text-green-300',
            background: '.lib-bg-green-300',
            textColor: '',
          },
          {
            name: 'Green-400',
            tokenValue: 'green-400',
            hsla: 'hsla(46, 96, 70, 1)',
            text: '.lib-text-green-400',
            background: '.lib-bg-green-400',
            textColor: '',
          },
          {
            name: 'Green-500',
            tokenValue: 'green-500',
            hsla: 'hsla(42, 86, 61, 1)',
            text: '.lib-text-green-500',
            background: '.lib-bg-green-500',
            textColor: '',
          },
          {
            name: 'Green-600',
            tokenValue: 'green-600',
            hsla: 'hsla(41, 91, 49, 1)',
            text: '.lib-text-green-600',
            background: '.lib-bg-green-600',
            textColor: 'lib-text-white',
          },
          {
            name: 'Green-700',
            tokenValue: 'green-700',
            hsla: 'hsla(30, 98, 41, 1)',
            text: '.lib-text-green-700',
            background: '.lib-bg-green-700',
            textColor: 'lib-text-white',
          },
          {
            name: 'Green-800',
            tokenValue: 'green-800',
            hsla: 'hsla(26, 97, 30, 1)',
            text: '.lib-text-green-800',
            background: '.lib-bg-green-800',
            textColor: 'lib-text-white',
          },
          {
            name: 'Green-900',
            tokenValue: 'green-900',
            hsla: 'hsla(15, 96, 19, 1)',
            text: '.lib-text-green-900',
            background: '.lib-bg-green-900',
            textColor: 'lib-text-white',
          },
        ],
      },
    ],
  })
);
