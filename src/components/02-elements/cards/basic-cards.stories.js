import { storiesOf } from '@storybook/html';
import BasicCard from './basic-cards.twig';
import AdvanceCard from './advance-cards.twig';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

// Utilities
import { componentOutput } from '@utils';

// Create random data
// https://github.com/marak/Faker.js/#api-methods
import Faker from 'faker';

const stories = storiesOf('Elements/Cards', module).addDecorator(
  withKnobs,
  withA11y
);

const basicCards = {
  Default: 'lib-basic-card',
  Yellow: 'lib-basic-card--yellow',
  Blue: 'lib-basic-card--blue',
};

stories.add('Basic Card', () =>
  componentOutput(
    BasicCard({
      class: select('Card Color', basicCards, 'lib-basic-card'),
      link: '#',
      ariaText: text('Aria Text', Faker.company.bsAdjective()),
      category: text('Category', Faker.random.word()),
      title: text('Title', Faker.random.words()),
      desc: text('Description', Faker.lorem.sentences()),
      cta: text('Call to Action', 'Learn More'),
    })
  )
);

// export const advance_card = () =>
//   AdvanceCard({
//     content: text('Content', 'Primary'),
//     id: 'test',
//     classes: 'lib-button',
//   });
