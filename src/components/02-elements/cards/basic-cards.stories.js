import { storiesOf } from '@storybook/html';
import BasicCard from './basic-cards.twig';
import BasicCardImage from './basic-cards--image.twig';
import NewsCardLead from './news-card--lead.twig';
import NewsCardBasic from './news-card--basic.twig';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import image from '@img/basic-card--image.jpg';
import newsImage from '@img/news-card.jpg';

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
  Yellow: 'lib-basic-card--yellow lib-basic-card',
  Blue: 'lib-basic-card--blue lib-basic-card',
};

stories.add('Basic Card', () =>
  componentOutput(
    BasicCard({
      class: select('Card Color', basicCards),
      link: '#',
      ariaText: text('Aria Text', Faker.company.bsAdjective()),
      icon: boolean('Icon?', true),
      category: text('Category', Faker.random.word()),
      title: text('Title', Faker.random.words()),
      desc: text('Description', Faker.lorem.sentences()),
      cta: text('Call to Action', 'Learn More'),
    })
  )
);

stories.add('Basic Card w/Image', () =>
  componentOutput(
    BasicCardImage({
      img: image,
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

stories.add('News Card Lead', () =>
  componentOutput(
    NewsCardLead({
      img: newsImage,
      link: '#',
      ariaText: text('Aria Text', Faker.company.bsAdjective()),
      category: text('Category', Faker.random.word()),
      title: text('Title', Faker.random.words()),
      // roughly 300 characters
      desc: text('Description', Faker.lorem.words(20)),
      cta: text('Call to Action', 'Read Article'),
    })
  )
);

stories.add('News Card Basic', () =>
  componentOutput(
    NewsCardBasic({
      img: image,
      link: '#',
      ariaText: text('Aria Text', Faker.company.bsAdjective()),
      category: text('Category', Faker.random.word()),
      title: text('Title', Faker.random.words()),
      // roughly 300 characters
      desc: text('Description', Faker.lorem.words(20)),
      cta: text('Call to Action', 'Read Article'),
    })
  )
);
