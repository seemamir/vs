/*
 *
 * Home actions
 *
 */

import { DEFAULT_ACTION, SELECTED_ROWS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function selectedRows(payload) {
  return {
    type: SELECTED_ROWS,
    payload,
  };
}
