/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SELECTED_ROWS } from './constants';

export const initialState = fromJS({
  selectedRows: [],
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SELECTED_ROWS:
      return state.set('selectedRows', action.payload);
    default:
      return state;
  }
}

export default homeReducer;
