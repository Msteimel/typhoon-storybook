import LeadBlock from './lead-block.twig';
import TextBlock from './text-block.twig';
import ImgBlock from './img-block.twig';
import LargeImg from './large-img.twig';
import TwoImg from './two-imgs.twig';
import ThreeImg from './three-imgs.twig';
import LinkList from './link-list.twig';
import LinkAbstract from './link-abstract.twig';
import Quote from './quote-block.twig';
import QuoteBanner from './quote-banner.twig';
import QuoteRibbon from './quote-ribbon.twig';

import imageLg from '@img/Above-as-below16-9.jpg';
import imageSm from '@img/Dawnbreaker600x600.jpg';

import { storiesOf } from '@storybook/html';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

// Utilities
import { componentOutput } from '@utils';

import '@js/accordion.js';

// Create random data
// https://github.com/marak/Faker.js/#api-methods
import Faker from 'faker';

const stories = storiesOf(
  'Content Blocks/General Content',
  module
).addDecorator(withKnobs, withA11y);

const imgSide = {
  Right: 'lib-text-img--right',
  Left: 'lib-text-img--left',
};

stories.add('Lead Block', () =>
  componentOutput(
    LeadBlock({
      headline: Faker.name.jobTitle(),
      para1: Faker.lorem.paragraph(),
    })
  )
);

stories.add('Text Blocks', () =>
  componentOutput(
    TextBlock({
      headline: text('Block Headline', Faker.name.jobTitle()),
      para1: text('Paragraph One', Faker.lorem.paragraph()),
      header: select('Header', ['h2', 'h3', 'h4', 'h5', 'h6'], 'h3'),
      headline2: text('Second Headline', Faker.name.jobTitle()),
      para2: text('Paragraph Two', Faker.lorem.paragraph()),
    })
  )
);

stories.add('Image + Text Block', () =>
  componentOutput(
    ImgBlock({
      imgSide: select('Image Side', imgSide, 'lib-text-img--right'),
      headline: text('Block Headline', Faker.name.jobTitle()),
      img: imageSm,
      alt: Faker.random.words(),
      header: select('Header', ['h2', 'h3', 'h4', 'h5', 'h6'], 'h3'),
      headline2: text('Second Headline', Faker.name.jobTitle()),
    })
  )
);

stories.add('Large Image Block', () =>
  componentOutput(
    LargeImg({
      img: imageLg,
      alt: Faker.random.words(),
    })
  )
);

stories.add('Two Images Block', () =>
  componentOutput(
    TwoImg({
      img: imageSm,
      alt: Faker.random.words(),
      alt1: Faker.random.words(),
    })
  )
);

stories.add('Three Images Block', () =>
  componentOutput(
    ThreeImg({
      img: imageSm,
      alt: Faker.random.words(),
      alt1: Faker.random.words(),
      alt2: Faker.random.words(),
    })
  )
);

stories.add('Link List Block', () =>
  componentOutput(
    LinkList({
      headline: text('Block Headline', Faker.name.jobTitle()),
      link: Faker.random.words(),
      link1: Faker.random.words(),
      link2: Faker.random.words(),
      link3: Faker.random.words(),
      link4: Faker.random.words(),
      link5: Faker.random.words(),
    })
  )
);

stories.add('Link Abstracts Block', () =>
  componentOutput(
    LinkAbstract({
      headline: text('Block Headline', Faker.name.jobTitle()),
      link: Faker.random.words(),
      abstract: Faker.lorem.sentences(),
      link1: Faker.random.words(),
      abstract1: Faker.lorem.sentences(),
      link2: Faker.random.words(),
      abstract2: Faker.lorem.sentences(),
      link3: Faker.random.words(),
      abstract3: Faker.lorem.sentences(),
    })
  )
);

stories.add('Quote Block', () =>
  componentOutput(
    Quote({
      quote: Faker.lorem.sentences(),
      name: Faker.name.findName(),
    })
  )
);

stories.add('Quote Banner Block', () =>
  componentOutput(
    QuoteBanner({
      quote: Faker.lorem.sentences(),
      name: Faker.name.findName(),
    })
  )
);

stories.add('Quote Ribbon Block', () =>
  componentOutput(
    QuoteRibbon({
      quote: Faker.lorem.sentences(),
      name: Faker.name.findName(),
    })
  )
);

stories.add(
  'All',
  () =>
    LeadBlock({
      headline: Faker.name.jobTitle(),
      para1: Faker.lorem.paragraph(),
    }),
  TextBlock({
    headline: Faker.name.jobTitle(),
    para1: Faker.lorem.paragraph(),
    header: 'h3',
    headline2: Faker.name.jobTitle(),
    para2: Faker.lorem.paragraph(),
  }),
  ImgBlock({
    imgSide: 'lib-text-img--right',
    headline: Faker.name.jobTitle(),
    img: imageSm,
    alt: Faker.random.words(),
    header: 'h3',
    headline2: Faker.name.jobTitle(),
  }),
  ImgBlock({
    imgSide: 'lib-text-img--left',
    headline: Faker.name.jobTitle(),
    img: imageSm,
    alt: Faker.random.words(),
    header: 'h3',
    headline2: Faker.name.jobTitle(),
  })
);
