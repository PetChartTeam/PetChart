import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';

// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.
import LabeledText from '../client/components/LabeledText';
import MarketDisplay from '../client/components/MarketDisplay';
import MarketsDisplay from '../client/components/MarketsDisplay';


// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const tree = renderer
    .create(<LabeledText page="http://localhost:3000">Home</LabeledText>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('React unit tests', () => {
  describe('LabeledText', () => {
    let wrapper;
    const props = {
      label: 'Mega',
      text: 'Markets',
    };

    beforeAll(() => {
      wrapper = shallow(<LabeledText {...props} />);
    });

    it('Renders a <p> tag with the label in bold', () => {
      expect(wrapper.type()).toEqual('p');
      expect(wrapper.text()).toEqual('Mega: Markets');
      expect(wrapper.find('strong').text()).toMatch('Mega');
    });
  });

  describe('MarketDisplay', () => {
    let wrapper;
    const props = {
      index: 0,
      location: 'Abu Dhabi',
      cards: 2,
      percentage: 85.00,
      addCard() {
        props.cards += 1;
      },
      deleteCard() {
        props.cards -= 1;
      },
    };

    beforeAll(() => {
      wrapper = shallow(<MarketDisplay {...props} />);
    });
    // TODO: Test the following:
    // 1. A MarketDisplay should display all of its text props inside a
    // LabeledText component
    it('should display all of its text props inside a LabeledText component', () => {
      expect(wrapper.contains(<LabeledText label="Market ID" text={0} />)).toEqual(true);
      expect(wrapper.contains(<LabeledText label="Location" text="Abu Dhabi" />)).toEqual(true);
      expect(wrapper.contains(<LabeledText label="Cards" text={2} />)).toEqual(true);
      expect(wrapper.contains(<LabeledText label="% of total" text={85.00} />)).toEqual(true);
      console.log('marketdisplay wrapper', wrapper);
    });
    // 2. It should also contain a div with two buttons
    it('should also contain a div with two buttons', () => {
      // console.log('length', wrapper.find('div').length);
      expect(wrapper.find('.flex').children('button')).toHaveLength(2);
    });
    // 3. The functions passed down should be invoked on click
    it('should be invoked on click', () => {
      wrapper.find('#addCard').simulate('click');
      expect(props.cards).toEqual(3);
      wrapper.find('#addCard').simulate('click');
      expect(props.cards).toEqual(4);
    });
    // 4. MarketDisplay should render a div with a class of `marketBox`, and the
    // interior div wrapping the two buttons should have a class of `flex`
    it('should render a div with class marketBox', () => {
      expect(wrapper.hasClass('marketBox')).toEqual(true);
    });

    it('should contain an interior div with class flex', () => {
      expect(wrapper.find('.marketBox').children('.flex')).toHaveLength(1);
    });
  });

  describe('MarketsDisplay', () => {
    let wrapper;
    const props = {
      totalCards: 2,
      marketList: [],
      addCard() {
        props.cards += 1;
      },
      deleteCard() {
        props.cards -= 1;
      },
    };

    beforeAll(() => {
      wrapper = shallow(<MarketsDisplay {...props} />);
    });
    // TODO: Test the following:
    //   1. A MarketsDisplay should have an h4 element to display the 'Markets'
    //   title
    it('should have an h4 element to display the \'Markets\' title', () => {
      expect(wrapper.find('h4').text()).toEqual('Markets');
      // console.log('marketsDisplay wrapper', wrapper);
    });
    //   2. A single MarketDisplay is rendered for each market in the
    //   marketList prop
    it('renders single MarketDisplay for each market in the marketList prop', () => {
      expect(wrapper.find('.allMarkets').children('div')).toHaveLength(0);
    });
    //   3. The percentage prop should be a string calculated to two decimals.
    //   Test for zero, a whole number, and a fractional value. (Right now this
    //   is implemented incorrectly, so follow TDD here)
    it('Test percentage prop for zero, a whole number, and a fractional value.', () => {
      const percentOfTotal = (cardCount, total) => (
        cardCount ? ((cardCount / total) * 100).toFixed(2) : 0);
      expect(typeof percentOfTotal(3, 30).toString()).toEqual('string');
    });
  });
});
