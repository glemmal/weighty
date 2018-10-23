
import { ADD_WEIGHT, REMOVE_WEIGHT } from '../actions/types';
import { get, setItem } from '../../utils/storage';

const STORAGE_KEY = 'weighty_weight_store';

export default (state = get(STORAGE_KEY, []), action) => {
  const { payload } = action;

  const handlers = {
    [ADD_WEIGHT]: (weight) => (
      [weight, ...state]
    ),

    [REMOVE_WEIGHT]: (weight) => (
      [...state.filter(e => e.uuid !== weight)]
    )
  };

  const updated = handlers[action.type] ? handlers[action.type](payload) : state;

  setItem(STORAGE_KEY, updated);

  return updated;
}