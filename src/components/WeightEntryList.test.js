import React from 'react';
import WeightEntryList from './WeightEntryList';

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

test('component is getting rendered', () => {
  const component = shallow(<WeightEntryList weights={[]} />);
  const tableBody = component.find('tbody');

  expect(tableBody.exists()).toEqual(true);
});

test('list is empty when no weights are given', () => {
  const component = shallow(<WeightEntryList weights={[]} />);
  const tableBody = component.find('tbody');

  expect(tableBody.children().length).toEqual(0);
});

test('list has two entries with weights', () => {
  const component = shallow(<WeightEntryList weights={WEIGHTS} />);
  const tableBody = component.find('tbody');

  expect(tableBody.children().length).toEqual(2);
});

test('list is in the right order', () => {
  const component = shallow(<WeightEntryList weights={WEIGHTS} />);
  const tableBody = component.find('tbody');

  expect(tableBody.find('tr').at(0).find('td').first().text()).toEqual('150 kg');
  expect(tableBody.find('tr').at(1).find('td').first().text()).toEqual('100 kg');
})

