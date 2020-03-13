import Intro from './intro.twig';
import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

// Create random data
// https://github.com/marak/Faker.js/#api-methods
import Faker from 'faker';

const stories = storiesOf('Introduction', module).addDecorator(
  withKnobs,
  withA11y
);

stories.add('Introduction', () =>
  Intro({
    id: 'test',
    title: 'Typhoon Component Library',
    content:
      'This is a technical view of Typhoon design tokens and component code',
  })
);
