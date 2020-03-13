import { storiesOf } from '@storybook/html';
import Form from './form.twig';
import Inputs from './input.twig';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

// utilities
import { componentOutput } from '@utils';

// Create random data
// https://github.com/marak/Faker.js/#api-methods
import Faker from 'faker';

export default { title: 'Elements/Form', decorators: [withKnobs, withA11y] };

const stories = storiesOf('Elements/Form', module).addDecorator(
  withKnobs,
  withA11y
);

const inputTypes = {
  Text: 'text',
  Phone: 'tel',
  Email: 'email',
  'Text Area': 'textarea',
  'Check Box': 'checkbox',
  Radio: 'radio',
  Select: 'select',
};

stories.add('Form', () =>
  componentOutput(
    Form({
      // content: text('Content', 'Primary'),
      // id: 'test',
      // classes: 'lib-button',
    })
  )
);

stories.add('Inputs', () =>
  componentOutput(
    Inputs({
      input: select('Input Type', inputTypes, 'text'),
    })
  )
);
