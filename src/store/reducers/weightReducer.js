
import { ADD_WEIGHT, REMOVE_WEIGHT } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_WEIGHT:
      return [action.payload, ...state];
    case REMOVE_WEIGHT:
      if (state.includes(action.payload)) {
        return state.splice(state.indexOf(action.payload), 1);
      }
      return state;
    default:
      return state;
  }
}