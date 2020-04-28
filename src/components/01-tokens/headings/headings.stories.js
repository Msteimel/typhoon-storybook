import { storiesOf } from '@storybook/html';
import Headings from './headings.twig';
import Special from './specialty-heading.twig';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

// Utilities
import { componentOutput } from '@utils';

// Create random data
// https://github.com/marak/Faker.js/#api-methods
import Faker from 'faker';

const stories = storiesOf('Tokens/Headings', module).addDecorator(
  withKnobs,
  withA11y
);

const underline = {
  Yes: 'lib-heading-underline',
  No: '',
};

stories.add('Headings', () =>
  componentOutput(
    Headings({
      text: text('Content', Faker.name.jobTitle()),
      header: select('Header', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'h1'),
      underline: select('Underline?', underline, ''),
    })
  )
);

stories.add('Specialty Heading', () =>
  componentOutput(
    Special({
      title: text('Title', Faker.random.words()),
      subTitle: text('Sub Title', Faker.random.words()),
    })
  )
);
