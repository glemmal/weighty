import React from 'react';
import Navigation from './Navigation';

import {shallow} from 'enzyme';

test('Navigation is rendered correclty', () => {
  const component = shallow(<Navigation />);
  expect(component.exists());
});