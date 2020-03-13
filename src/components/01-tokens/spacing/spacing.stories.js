import Twig from 'twig';
import Spacing from './spacing.twig';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

// Create random data
// https://github.com/marak/Faker.js/#api-methods
import Faker from 'faker';

export default { title: 'Tokens/Spacing', decorators: [withKnobs, withA11y] };

export const default_button = () =>
  Spacing({
    content: text('Content', 'Primary'),
    id: 'test',
    classes: 'lib-button',
  });
