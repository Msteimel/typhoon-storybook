import Accordion from './accordion.twig';
import { storiesOf } from '@storybook/html';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

// Utilities
import { componentOutput } from '@utils';

import '@js/accordion.js';

// Create random data
// https://github.com/marak/Faker.js/#api-methods
import Faker from 'faker';

const stories = storiesOf('Elements/Accordion', module).addDecorator(
  withKnobs,
  withA11y
);

// export const accordion = () =>
//   componentOutput(
//     Accordion({
//       content: text('Content', 'Primary'),
//     })
//   );

stories.add('Accordion', () =>
  componentOutput(
    Accordion({
      content: text('Text', 'Button'),
    })
  )
);
