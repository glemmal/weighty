import { ADD_WEIGHT, REMOVE_WEIGHT } from './types';

export const addWeight = weight => ({
  type: ADD_WEIGHT,
  payload: weight
});

export const removeWeight = weight => ({
  type: REMOVE_WEIGHT,
  payload: weight
});