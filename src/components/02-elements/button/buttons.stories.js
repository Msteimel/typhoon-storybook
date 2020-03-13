import { storiesOf } from '@storybook/html';
import Button from './button.twig';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

// Utilities
import { componentOutput } from '@utils';

// Create random data
// https://github.com/marak/Faker.js/#api-methods
import Faker from 'faker';

const stories = storiesOf('Elements/Buttons', module).addDecorator(
  withKnobs,
  withA11y
);

const primaryButton = {
  Button: 'lib-button',
  'Button + Icon': 'lib-button lib-button--icon',
};
const secondaryButton = {
  Button: 'lib-button lib-button--secondary',
  'Button + Icon': 'lib-button lib-button--secondary lib-button--icon',
};
const accentButton = {
  Button: 'lib-button lib-button--accent',
  'Button + Icon': 'lib-button lib-button--accent lib-button--icon',
};

stories.add('Primary', () =>
  componentOutput(
    Button({
      content: text('Content', 'Primary'),
      classes: select('Button Style', primaryButton, 'lib-button'),
    })
  )
);

stories.add('secondary', () =>
  componentOutput(
    Button({
      content: text('Content', 'Secondary'),
      classes: select(
        'Button Style',
        secondaryButton,
        'lib-button lib-button--secondary'
      ),
    })
  )
);

stories.add('Accent', () =>
  componentOutput(
    Button({
      content: text('Content', 'Accent'),
      classes: select(
        'Button Style',
        accentButton,
        'lib-button lib-button--accent'
      ),
    })
  )
);
