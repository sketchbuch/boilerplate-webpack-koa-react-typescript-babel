import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  test('Renders without crashing', () => {
    const wrapper = shallow(<App title="Title" />);
    expect(wrapper).toHaveLength(1);
  });
});
