import React from 'react';
import WeightInput from './WeightInput';

import {shallow} from 'enzyme';

test('component renders correctly', () => {
  let addedWeight = null;

  const addWeight = (weight) => {
    addedWeight = weight;
  }

  const component = shallow(<WeightInput addWeight={addWeight}/>);
  const input = component.find('input');
  const submitButton = component.find('button');

  expect(input.exists()).toBeTruthy();
  expect(submitButton.exists()).toBeTruthy();
});

test('component submits correctly', () => {
  let addedWeight = null;

  const addWeight = (weight) => {
    addedWeight = weight;
  }

  const component = shallow(<WeightInput addWeight={addWeight}/>);
  const input = component.find('input');
  const submitButton = component.find('button');

  input.simulate('change', { target: { value: '100' } });
  submitButton.simulate('click', { preventDefault () {} });

  expect(addedWeight.value).toEqual(100);
  expect(typeof addedWeight.createdAt).toBe('number');
  expect(typeof addedWeight.uuid).toBe('string');
});
