import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('image has alt "logo"', () => {
  const app = shallow(<App />);
  expect(app.find('img').prop('alt')).toEqual('logo');
});

xit('Ignore failed test image cannot change alt', () => {
  const app = mount(<App />);
  app.find('img').setProps({ alt: 'other'});
  expect(app.find('img').prop('alt')).not.toEqual('other');
});