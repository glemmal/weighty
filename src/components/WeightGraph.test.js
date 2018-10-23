import React from 'react';
import WeightGraph from './WeightGraph';

import {shallow} from 'enzyme';

const WEIGHTS = [
  {
    createdAt: Date.now(),
    value: 100,
    uuid: 1
  },
  {
    createdAt: Date.now() + 100,
    value: 150,
    uuid: 2
  }
];

test('WeightGraph is rendered correclty', () => {
  const component = shallow(<WeightGraph weights={WEIGHTS} />);
  expect(component.exists());
});