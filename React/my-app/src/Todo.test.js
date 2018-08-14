import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Todo from './Todo';

Enzyme.configure({ adapter: new Adapter() });

const onClick = jest.fn;

it('Todo display text', () => {
  const app = shallow(<Todo onClick={onClick} completed={false} text="original" />);
  expect(app.find('li').text()).toEqual('original');
});

it('Can change text', () => {
  const app = shallow(<Todo onClick={onClick} completed={false} text="original" />);

  app.setProps({text : 'change'});

  expect(app.find('li').text()).toEqual('change');
});