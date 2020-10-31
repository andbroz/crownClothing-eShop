import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  test('matches snapshop', () => {
    expect(<App />).toMatchSnapshot();
  });
});
